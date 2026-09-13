import { Component, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { PySpringArchitectureComponent } from './pyspring-architecture.component';
import { TalosArchitectureComponent } from './talos-architecture.component';
import { WireGuardArchitectureComponent } from './wireguard-architecture.component';

interface Project {
  id: string;
  title: string;
  period?: string;
  description?: string;
  technologies?: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture?: string;
  features?: string[];
  tooltip?: string;
  overview?: string;
  projectLink?: string;
  buttonText?: string;
  projectName?: string;
  contributions?: string;
  /** Rendered inside the expandable architecture panel when present. */
  architectureDiagram?: {
    component: Type<unknown>;
    summary: string;
  };
}

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

  get activeProject(): Project {
    return this.projects[this.activeProjectIndex];
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

  projects: Project[] = [
    {
      id: 'pyspring',
      title: 'PySpring Framework',
      period: '2023/10 - Present',
      tooltip: 'Open-source project',
      overview: 'A Python web framework inspired by Spring Boot, focused on developer experience and framework-level design.',
      architecture: 'Class scanning → IoC container → FastAPI routers and middleware → queued in-process events',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'Uvicorn', 'OpenAPI', 'Dependency Injection', 'Pub/Sub'],
      features: [
        'Annotation-driven IoC container with singleton and prototype scopes, qualifiers, and abstract-type resolution',
        'Declarative REST controllers and request mappings backed by FastAPI-generated OpenAPI documentation',
        'In-process publish/subscribe events with queued background-thread dispatch',
        'Type-annotated field injection across components, factory beans, and Pydantic-validated properties',
        'Extensible core with lifecycle hooks, ordered middleware, and entry-point-discovered starter modules'
      ],
      description: 'A long-running experiment in framework-level design, validating whether better abstractions measurably improve team development experience.',
      projectLink: 'https://pythonspring.github.io/pyspring-docs',
      buttonText: 'View docs',
      githubUrl: 'https://github.com/PythonSpring/pyspring-core',
      architectureDiagram: {
        component: PySpringArchitectureComponent,
        summary: 'Application classes are scanned and registered into an IoC container that resolves components, factory beans, and Pydantic-validated properties by type annotation. Controllers are bound onto FastAPI routers, while published events are dispatched from a queue on a background worker thread.'
      }
    },
    {
      id: 'talos-aws',
      title: 'Talos Kubernetes Cluster on AWS',
      period: '2025/1 - 2025/3',
      tooltip: 'Cloud-native infrastructure',
      overview: 'Provisioned a production-style Kubernetes cluster on AWS with Terraform and Talos Linux (VPC, compute, worker nodes as code).',
      technologies: ['Terraform', 'Talos Linux', 'Kubernetes', 'AWS', 'WireGuard', 'Traefik', 'KEDA', 'Fluent Bit', 'Jaeger', 'OpenTelemetry', 'Elasticsearch', 'Kibana'],
      imageUrl: '',
      architecture: 'Terraform-driven AWS Talos cluster with WireGuard site-to-site VPN and ALB + Traefik ingress',
      features: [
        'Talos control plane provisioned on AWS EC2 with Terraform (VPC, compute, worker nodes as code)',
        'Spot Instances in an Auto Scaling Group as worker nodes to cut compute cost',
        'WireGuard site-to-site VPN connecting the on-prem environment to the AWS VPC',
        'Application Load Balancer (ALB) with Traefik Ingress Controller as the cluster traffic entry point'
      ],
      architectureDiagram: {
        component: TalosArchitectureComponent,
        summary: 'Terraform-provisioned AWS infrastructure: public ALB to Traefik NodePort for workload traffic, a dedicated NLB for the Kubernetes API, Spot-backed worker nodes, and a WireGuard gateway bridging on-prem and remote sites.'
      }
    },
    {
      id: 'wg-control-plane',
      title: 'WireGuard Control Plane',
      period: '2025/4 - 2025/6',
      tooltip: 'Personal side project',
      overview: 'Built a centralized multi-cloud WireGuard VPN management platform that standardizes server provisioning, config rollout, and day-to-day operations.',
      architecture: 'Angular SPA → Spring Boot API → PostgreSQL → Ansible job engine → SSH-managed WireGuard hosts',
      features: [
        'WireGuard server and client lifecycle management (CRUD + status monitoring)',
        'Automated deployment engine that dynamically generates Ansible inventories',
        'Tracks Ansible rollout jobs across managed Linux hosts, including status, output, cancellation, and retry',
        'Simplified site-to-site VPN setup workflow'
      ],
      description: 'A centralized WireGuard VPN management platform that generates configuration, executes Ansible playbooks over SSH, and tracks deployments across managed Linux hosts.',
      technologies: ['Kotlin', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'WireGuard'],
      githubUrl: 'https://github.com/NFUChen/wg-control-plane',
      architectureDiagram: {
        component: WireGuardArchitectureComponent,
        summary: 'Desired VPN state is stored in PostgreSQL, rendered into WireGuard configuration and a per-rollout Ansible inventory, then applied to managed Linux hosts over SSH. Every run is persisted as a job with status, output, cancellation, and retry.'
      }
    }
  ];
}