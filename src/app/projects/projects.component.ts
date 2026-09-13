import { Component, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
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
  expandedArchitectures: Set<string> = new Set();

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
    if (this.expandedArchitectures.has(projectId)) {
      this.expandedArchitectures.delete(projectId);
    } else {
      this.expandedArchitectures.add(projectId);
    }
  }

  isArchitectureExpanded(projectId: string): boolean {
    return this.expandedArchitectures.has(projectId);
  }

  projects: Project[] = [
    {
      id: 'pyspring',
      title: 'PySpring Framework',
      period: '2023/10 - Present',
      tooltip: 'Open-source project',
      overview: 'A Python web framework inspired by Spring Boot, focused on developer experience and framework-level design.',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'ASGI', 'OpenAPI', 'Dependency Injection', 'Event-driven'],
      features: [
        'Dependency injection (DI) container to reduce coupling between modules',
        'REST API development with automatically generated OpenAPI documentation',
        'Built-in event system and asynchronous processing',
        'Type-safe multi-source injection for a better developer experience',
        'Extensible framework core built on FastAPI, Pydantic, and ASGI'
      ],
      description: 'A long-running experiment in framework-level design, validating whether better abstractions measurably improve team development experience.',
      projectLink: 'https://pythonspring.github.io/pyspring-docs',
      buttonText: 'View docs'
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