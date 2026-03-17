import { Component, inject, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgComponentOutlet } from '@angular/common';
import { AboutComponent } from '../components/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../components/skills.component';
import { ProjectsComponent } from '../projects/projects.component';

const PAGE_COMPONENTS: Record<string, Type<unknown>> = {
  about: AboutComponent,
  experience: ExperienceComponent,
  skills: SkillsComponent,
  projects: ProjectsComponent
};

const VALID_PAGES = Object.keys(PAGE_COMPONENTS);

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    @if (currentComponent) {
      <ng-container *ngComponentOutlet="currentComponent"></ng-container>
    }
  `
})
export class PageContainerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  currentComponent: Type<unknown> = AboutComponent;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const page = params['page']?.toLowerCase();
      if (!page || !VALID_PAGES.includes(page)) {
        if (!page) {
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { page: 'about' },
            replaceUrl: true
          });
        }
        this.currentComponent = AboutComponent;
      } else {
        this.currentComponent = PAGE_COMPONENTS[page];
      }
    });
  }
}
