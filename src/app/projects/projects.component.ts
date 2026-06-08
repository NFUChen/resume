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
      period: '2023/10 - 進行中',
      tooltip: '個人開源專案',
      overview: '自主開發的 Python Web 框架，靈感來自 Spring Boot，聚焦在開發者體驗與框架設計實作。',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'ASGI', 'OpenAPI', 'Dependency Injection', 'Event-driven'],
      features: [
        '提供依賴注入（DI）容器管理，降低模組耦合度',
        '支援 REST API 開發並自動生成 OpenAPI 文件',
        '整合事件系統與非同步處理機制',
        '實作型別安全的多來源注入，提升開發者體驗',
        '基於 FastAPI + Pydantic + ASGI 打造可擴展框架核心'
      ],
      description: 'PySpring 不只是練習專案，而是以框架層思維驗證「抽象設計是否真的能改善團隊開發體驗」的長期實驗。',
      projectLink: 'https://pythonspring.github.io/pyspring-docs',
      buttonText: '查看專案'
    },
    {
      title: 'Talos Kubernetes 叢集架構',
      period: '2025/1 - 2025/3',
      tooltip: '雲端原生基礎架構',
      overview: '以 Terraform + Talos 在 AWS 建置 Kubernetes 叢集，實作控制平面、使用Spot Instance作為工作節點降低成本。',
      technologies: ['Terraform', 'Talos Linux', 'Kubernetes', 'AWS', 'WireGuard', 'Traefik', 'KEDA', 'Fluent Bit', 'Jaeger', 'OpenTelemetry', 'Elasticsearch', 'Kibana'],
      imageUrl: '',
      architecture: 'Terraform IaC 驅動的 AWS Talos 叢集 + WireGuard Site-to-Site + NLB/ALB 雙層負載均衡',
      features: [
        'AWS EC2 佈署 Talos 控制平面',
        'Auto Scaling Group 管理 Spot Instance 作為 Worker 節點，兼顧彈性與成本',
        'WireGuard Site-to-Site VPN 串接地端環境與 AWS VPC',
        'Application Load Balancer (ALB) 作為 Kubernetes 配合Traefik Ingress Controller作為流量入口'
      ]
    },
    {
      title: 'WireGuard 控制平面 - 個人 Side Project',
      period: '2025/4 - 2025/6',
      tooltip: '個人 Side Project',
      overview: '獨立開發 WireGuard VPN 集中管理平台，將 VPN 伺服器建置、配置推送與日常管理流程標準化。',
      architecture: 'Spring Boot + Kotlin 後端 API、Angular 前端、PostgreSQL',
      features: [
        'WireGuard 伺服器與客戶端生命週期管理（CRUD + 狀態監控）',
        '動態產生 Ansible Inventory 並管理雲端主機',
        '自動化部署引擎（遠端配置推送與任務追蹤），支援多種雲端平台',
        '簡化 Site-to-Site VPN 的設置流程'
      ],
      description: '簡化 Site-to-Site VPN 的設置流程，讓使用者可以快速設置 VPN 連線，並管理 VPN 伺服器與客戶端的生命週期。',
      technologies: ['Kotlin', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'WireGuard']
    },
    {
      title: 'General Authentication Service',
      period: '2025/10 - 進行中',
      tooltip: '跨系統認證平台',
      overview: '統一平台內多個服務的登入與授權流程，降低重複實作與維護成本，提升跨服務安全一致性。',
      technologies: ['Kotlin', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'JWT', 'Redis', 'PostgreSQL', 'Kubernetes', 'AWS SES'],
      features: [
        '支援 OAuth 2.0（Line、Google）與 JWT 跨服務授權',
        '整合 Spring Security 建立可擴展的認證與權限模型',
        '以 Redis 提升驗證流程效率，PostgreSQL 管理核心認證資料',
        '部署於 Kubernetes，確保高可用與服務穩定性',
        '透過 AWS SES 支援驗證通知與帳務相關信件流程'
      ],
      description: '此服務作為平台級認證中樞，提供微服務登入功能，讓新服務能快速接入並沿用一致的登入機制。目前支援OAuth 2.0（Line、Google）作為登入方式，JWT作為跨服務授權。'
    },
  //   {
  //     title: 'WordPress-as-a-Service 多租戶平台',
  //     overview: '基於 AWS 構建的 WordPress 多租戶 SaaS 平台後端基礎設施。專注於雲原生架構設計，實現資源隔離、自動化部署與彈性擴展，預期支援數百個客戶網站同時運行。此專案為純後端雲基礎設施實作，不包含前端介面與營銷功能。',
  //     architecture: 'AWS 多租戶架構：EKS + Terraform IaC + 租戶隔離 + 自動化部署',
  //     features: [
  //       '多租戶架構：基於 Kubernetes Namespace 的租戶隔離',
  //       '自動化部署：客戶一鍵建站 + WordPress 自動安裝 + 域名綁定',
  //       'Infrastructure as Code：Terraform 模組化管理 + 環境自動佈建',
  //       'Amazon EKS 容器化：SPOT 實例成本優化 + 自動擴展 + 高密度部署',
  //       '資料庫隔離：每租戶獨立 RDS 實例 + 自動備份 + 跨區域複製',
  //       '儲存管理：EFS 共享儲存 + 租戶資料隔離 + 自動備份策略',
  //       '網路架構：ALB 多域名路由 + SSL 憑證自動化',
  //     ],
  //     description: '這是一個純後端雲基礎設施專案，專注於 WordPress SaaS 平台的多租戶架構設計與自動化部署。技術亮點包括：基於 Kubernetes 的租戶隔離策略，確保客戶資料安全與效能獨立；Terraform 驅動的基礎設施自動化，支援客戶網站快速部署；智能資源調度與成本優化，透過 SPOT 實例與動態擴展降低營運成本。注意：此專案範疇僅涵蓋後端雲基礎設施實作，前端使用者介面與營銷功能不在此專案範疇內。',
  //     projectLink: '',
  //     buttonText: ''
  //   }
  // ];
  ];
}