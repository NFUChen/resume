import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
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
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  expandedProjects: Set<string> = new Set();

  toggleProjectExpansion(projectTitle: string): void {
    if (this.expandedProjects.has(projectTitle)) {
      this.expandedProjects.delete(projectTitle);
    } else {
      this.expandedProjects.add(projectTitle);
    }
  }

  isProjectExpanded(projectTitle: string): boolean {
    return this.expandedProjects.has(projectTitle);
  }

  projects: Project[] = [
    {
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
      buttonText: 'View project'
    },
    {
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
      ]
    },
    {
      title: 'WireGuard Control Plane',
      period: '2025/4 - 2025/6',
      tooltip: 'Personal side project',
      overview: 'Built a centralized multi-cloud WireGuard VPN management platform that standardizes server provisioning, config rollout, and day-to-day operations.',
      architecture: 'Kotlin / Spring Boot backend API, Angular frontend, PostgreSQL',
      features: [
        'WireGuard server and client lifecycle management (CRUD + status monitoring)',
        'Automated deployment engine that dynamically generates Ansible inventories',
        'Rollout task tracking across multiple cloud providers',
        'Simplified site-to-site VPN setup workflow'
      ],
      description: 'A centralized multi-cloud WireGuard VPN management platform with an automated deployment engine that dynamically generates Ansible inventories and tracks rollout tasks across providers.',
      technologies: ['Kotlin', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'WireGuard']
    }
  ];
}