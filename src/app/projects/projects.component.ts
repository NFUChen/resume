import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Type } from '@angular/core';
import { PROJECTS, ResumeProject } from '../data/resume.data';
import { PySpringArchitectureComponent } from './pyspring-architecture.component';
import { TalosArchitectureComponent } from './talos-architecture.component';
import { WireGuardArchitectureComponent } from './wireguard-architecture.component';

interface Project extends ResumeProject {
  architectureDiagram?: {
    component: Type<unknown>;
    summary: string;
  };
}

const ARCHITECTURE_COMPONENTS: Record<string, Type<unknown>> = {
  pyspring: PySpringArchitectureComponent,
  'talos-aws': TalosArchitectureComponent,
  'wg-control-plane': WireGuardArchitectureComponent
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  expandedProjects: Set<string> = new Set();
  activeProjectIndex = 0;
  activeArchitectureId: string | null = null;

  projects: Project[] = PROJECTS.map(project => ({
    ...project,
    architectureDiagram: project.architectureSummary
      ? {
          component: ARCHITECTURE_COMPONENTS[project.id],
          summary: project.architectureSummary
        }
      : undefined
  }));

  get activeProject(): Project {
    return this.projects[this.activeProjectIndex];
  }

  toggleProjectExpansion(projectId: string): void {
    if (this.expandedProjects.has(projectId)) {
      this.expandedProjects.delete(projectId);
    } else {
      this.expandedProjects.add(projectId);
    }
  }

  isProjectExpanded(projectId: string): boolean {
    return this.expandedProjects.has(projectId);
  }

  toggleArchitecture(projectId: string): void {
    const isClosing = this.activeArchitectureId === projectId;
    this.activeArchitectureId = isClosing ? null : projectId;

    if (!isClosing) {
      this.scrollToArchitecture();
    }
  }

  showPreviousProject(): void {
    this.changeProject(-1);
  }

  showNextProject(): void {
    this.changeProject(1);
  }

  isArchitectureExpanded(projectId: string): boolean {
    return this.activeArchitectureId === projectId;
  }

  private changeProject(offset: number): void {
    this.activeProjectIndex = (this.activeProjectIndex + offset + this.projects.length) % this.projects.length;
    this.activeArchitectureId = null;
  }

  private scrollToArchitecture(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById('architecture-carousel')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
}
