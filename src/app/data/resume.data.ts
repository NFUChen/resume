export interface AchievementGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  role: string;
  summary: string;
  achievements?: string[];
  achievementGroups?: AchievementGroup[];
}

export interface ResumeProject {
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
  architectureSummary?: string;
}

export const PROFILE = {
  name: 'William Chen',
  headline: 'Infrastructure / Site Reliability Engineer',
  focus: ['Kubernetes', 'Terraform', 'AI Infrastructure'],
  location: 'Chiayi County, Taiwan',
  availability: 'Open to Taipei hybrid roles',
  yearsOfExperience: '4+',
  linkedin: 'https://linkedin.com/in/william-chen-3258a6199',
  github: 'https://github.com/NFUChen',
  summary: 'Cloud Infrastructure Engineer with 4+ years of experience building and automating production infrastructure across AWS, Azure, Oracle Cloud, and Kubernetes environments. Supports AI infrastructure at Trend Micro through Ray/vLLM model-serving delivery, Helm-based CI/CD, and Prometheus observability for inference services. Brings hands-on Infrastructure-as-Code, deployment automation, cloud networking, and production reliability experience to AI/ML infrastructure operations.'
} as const;

export const CORE_SKILLS = {
  'Container & Orchestration': ['Kubernetes', 'Helm', 'Docker', 'Docker Compose'],
  'Infrastructure & Automation': ['Terraform', 'Ansible', 'GitHub Actions', 'CI/CD', 'Linux'],
  'Cloud Platforms': ['AWS', 'Microsoft Azure', 'Oracle Cloud Infrastructure'],
  'AI / ML Infrastructure': ['Ray', 'vLLM model serving'],
  Observability: ['Prometheus', 'Grafana', 'OpenTelemetry'],
  'Networking & Security': ['WireGuard', 'VPN Technology'],
  Programming: ['Python', 'Go', 'Java (Spring Boot)', 'TypeScript (Angular)']
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Sep 2024 - Present',
    title: 'Trend Micro',
    role: 'Cloud Infrastructure Engineer / Zero Trust Network Access · Security SaaS Platform & AI Infrastructure (TrendAI)',
    summary: 'Building and automating production infrastructure for a Zero Trust Network Access / Security SaaS platform, and supporting AI infrastructure (Ray/vLLM model serving) for Trend AI.',
    achievementGroups: [
      { category: 'Reliability engineering', items: ['Designed and shipped a PoP failover system replacing stale heartbeat checks with Azure Traffic Manager endpoint-health monitoring and Redis distributed locking, improving cross-region VPN connection reliability'] },
      { category: 'Security automation', items: ['Built and automated a multi-cloud API key and credential rotation pipeline across AWS, Azure, and Oracle Cloud, replacing manual rotation workflows and reducing credential exposure risk'] },
      { category: 'Infrastructure delivery', items: ['Led end-to-end deployment of a new regional VPN network node in Thailand, from staging through production, including multi-availability-zone architecture design and rollout coordination'] },
      { category: 'AI serving pipeline', items: ['Improved Ray-based LLM model-serving infrastructure by strengthening Helm chart CI/CD, chart build/version tracking, and JFrog Artifactory OCI image publishing for downstream deployments'] },
      { category: 'Observability', items: ['Designed Prometheus-based observability for vLLM inference services using Prometheus Operator ServiceMonitor and PrometheusRule, covering availability, latency, and capacity signals'] },
      { category: 'Incident response', items: ['Introduced tiered alerting for inference availability, latency, and capacity to improve production visibility and reduce incident response time'] }
    ]
  },
  {
    period: 'Sep 2022 - Aug 2024',
    title: 'SRAM',
    role: 'Backend / DevOps Engineer / MES & Factory Digitalization Platform for Industrial Manufacturing',
    summary: 'Built a production dashboard system end-to-end for a factory digitalization platform, from edge clients to backend services and data storage.',
    achievementGroups: [
      { category: 'End-to-end system design', items: ['Designed and built a production dashboard system end-to-end, including Raspberry Pi edge clients publishing production data over MQTT, Spring Boot / Javalin microservices, and PostgreSQL / MongoDB / Redis data storage'] },
      { category: 'Operations & automation', items: ['Implemented real-time production, utilization, and downtime visibility', 'Automated client-server deployment with Docker Compose and Ansible provisioning'] }
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

export const PROJECTS: ResumeProject[] = [
  {
    id: 'pgschema', title: 'pgschema — Open Source Contributor', period: '2026/5', tooltip: 'Open-source contribution',
    overview: 'Contributed to a Terraform-style declarative schema migration CLI for PostgreSQL that generates and safely applies migration plans from a desired SQL schema state.',
    architecture: 'Desired SQL schema → PostgreSQL-aware diff engine → reviewed migration plan → safe apply',
    technologies: ['Go', 'PostgreSQL', 'Cobra CLI', 'GitHub Actions', 'CI/CD'],
    features: ['Added apply-command file-extension validation with comprehensive test coverage, preventing unsupported plan inputs from reaching migration execution (merged PR #434)', 'Refactored release CI into a GitHub Actions matrix that tests PostgreSQL 14–18 concurrently, reducing duplication and improving failure visibility (merged PR #432)', 'Explored and proposed support for TOML configuration, multi-schema migrations, column rename detection, and PostgreSQL extensions through upstream PRs'],
    description: 'Open-source contributions to pgschema, a PostgreSQL-focused CLI that replaces hand-written, sequential migration files with a declarative dump, plan, and apply workflow.',
    githubUrl: 'https://github.com/pgplex/pgschema'
  },
  {
    id: 'pyspring', title: 'PySpring Framework', period: '2023/10 - Present', tooltip: 'Open-source project',
    overview: 'A Python web framework inspired by Spring Boot, focused on developer experience and framework-level design.',
    architecture: 'Class scanning → IoC container → FastAPI routers and middleware → queued in-process events',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'Uvicorn', 'OpenAPI', 'Dependency Injection', 'Pub/Sub'],
    features: ['Annotation-driven IoC container with singleton and prototype scopes, qualifiers, and abstract-type resolution', 'Declarative REST controllers and request mappings backed by FastAPI-generated OpenAPI documentation', 'In-process publish/subscribe events with queued background-thread dispatch', 'Type-annotated field injection across components, factory beans, and Pydantic-validated properties', 'Extensible core with lifecycle hooks, ordered middleware, and entry-point-discovered starter modules'],
    description: 'A long-running experiment in framework-level design, validating whether better abstractions measurably improve team development experience.',
    projectLink: 'https://pythonspring.github.io/pyspring-docs', buttonText: 'View docs', githubUrl: 'https://github.com/PythonSpring/pyspring-core',
    architectureSummary: 'Application classes are scanned and registered into an IoC container that resolves components, factory beans, and Pydantic-validated properties by type annotation. Controllers are bound onto FastAPI routers, while published events are dispatched from a queue on a background worker thread.'
  },
  {
    id: 'talos-aws', title: 'Talos Kubernetes Cluster on AWS', period: '2025/1 - 2025/3', tooltip: 'Cloud-native infrastructure',
    overview: 'Provisioned a production-style Kubernetes cluster on AWS with Terraform and Talos Linux (VPC, compute, worker nodes as code).',
    technologies: ['Terraform', 'Talos Linux', 'Kubernetes', 'AWS', 'WireGuard', 'Traefik'], imageUrl: '',
    architecture: 'Terraform-driven AWS Talos cluster with WireGuard site-to-site VPN and ALB + Traefik ingress',
    features: ['Talos control plane provisioned on AWS EC2 with Terraform (VPC, compute, worker nodes as code)', 'Spot Instances in an Auto Scaling Group as worker nodes to cut compute cost', 'WireGuard site-to-site VPN connecting the on-prem environment to the AWS VPC', 'Application Load Balancer (ALB) with Traefik Ingress Controller as the cluster traffic entry point'],
    architectureSummary: 'Terraform-provisioned AWS infrastructure: public ALB to Traefik NodePort for workload traffic, a dedicated NLB for the Kubernetes API, Spot-backed worker nodes, and a WireGuard gateway bridging on-prem and remote networks.'
  },
  {
    id: 'wg-control-plane', title: 'WireGuard Control Plane', period: '2025/4 - 2025/6', tooltip: 'Personal side project',
    overview: 'Built a centralized WireGuard VPN management platform that standardizes server provisioning, configuration rollout, and day-to-day operations.',
    architecture: 'Angular SPA → Spring Boot API → PostgreSQL → Ansible job engine → SSH-managed WireGuard hosts',
    features: ['WireGuard server and client lifecycle management (CRUD + status monitoring)', 'Automated deployment engine that dynamically generates Ansible inventories', 'Tracks Ansible rollout jobs across managed Linux hosts, including status, output, cancellation, and retry', 'Simplified site-to-site VPN setup workflow'],
    description: 'A centralized WireGuard VPN management platform that generates configuration, executes Ansible playbooks over SSH, and tracks deployments across managed Linux hosts.',
    technologies: ['Kotlin', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'WireGuard'],
    githubUrl: 'https://github.com/NFUChen/wg-control-plane',
    architectureSummary: 'Desired VPN state is stored in PostgreSQL, rendered into WireGuard configuration and a per-rollout Ansible inventory, then applied to managed Linux hosts over SSH. Every run is persisted as a job with status, output, cancellation, and retry.'
  }
];
