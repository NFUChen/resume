import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AchievementGroup {
  category: string;
  items: string[];
}

interface TimelineItem {
  period: string;
  title: string;
  role: string;
  summary: string;
  achievements?: string[];
  achievementGroups?: AchievementGroup[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  timeline: TimelineItem[] = [
    {
      period: 'Sep 2024 - Present',
      title: 'Trend Micro',
      role: 'Cloud Infrastructure Engineer / Zero Trust Network Access · Security SaaS Platform & AI Infrastructure (TrendAI)',
      summary: 'Building and automating production infrastructure for a Zero Trust Network Access / Security SaaS platform, and supporting AI infrastructure (Ray/vLLM model serving) for Trend AI.',
      achievementGroups: [
        {
          category: 'Reliability engineering',
          items: [
            'Designed and shipped a PoP failover system replacing stale heartbeat checks with Azure Traffic Manager endpoint-health monitoring and Redis distributed locking, improving cross-region VPN connection reliability'
          ]
        },
        {
          category: 'Security automation',
          items: [
            'Built and automated a multi-cloud API key and credential rotation pipeline across AWS, Azure, and Oracle Cloud, replacing manual rotation workflows and reducing credential exposure risk'
          ]
        },
        {
          category: 'Infrastructure delivery',
          items: [
            'Led end-to-end deployment of a new regional VPN network node in Thailand, from staging through production, including multi-availability-zone architecture design and rollout coordination'
          ]
        },
        {
          category: 'AI serving pipeline',
          items: [
            'Improved Ray-based LLM model-serving infrastructure by strengthening Helm chart CI/CD, chart build/version tracking, and JFrog Artifactory OCI image publishing for downstream deployments'
          ]
        },
        {
          category: 'Observability',
          items: [
            'Designed Prometheus-based observability for vLLM inference services using Prometheus Operator ServiceMonitor and PrometheusRule, covering availability, latency, and capacity signals'
          ]
        },
        {
          category: 'Incident response',
          items: [
            'Introduced tiered alerting for inference availability, latency, and capacity to improve production visibility and reduce incident response time'
          ]
        }
      ]
    },
    {
      period: 'Sep 2022 - Aug 2024',
      title: 'SRAM',
      role: 'Backend / DevOps Engineer / MES & Factory Digitalization Platform for Industrial Manufacturing',
      summary: 'Built a production dashboard system end-to-end for a factory digitalization platform, from edge clients to backend services and data storage.',
      achievementGroups: [
        {
          category: 'End-to-end system design',
          items: [
            'Designed and built a production dashboard system end-to-end, including Raspberry Pi edge clients publishing production data over MQTT, Spring Boot / Javalin microservices, and PostgreSQL / MongoDB / Redis data storage'
          ]
        },
        {
          category: 'Operations & automation',
          items: [
            'Implemented real-time production, utilization, and downtime visibility',
            'Automated client-server deployment with Docker Compose and Ansible provisioning'
          ]
        }
      ]
    },
    {
      period: '2020/9 - 2022/6',
      title: 'National Formosa University',
      role: 'M.S. in Industrial Engineering and Management',
      summary: 'Built a solid academic foundation in engineering management, developing systems thinking and problem-solving skills.'
    },
    {
      period: '2015 - 2020',
      title: 'National Formosa University',
      role: 'B.S. in Industrial Engineering and Management',
      summary: 'Completed undergraduate studies in industrial engineering and management.'
    }
  ];
}
