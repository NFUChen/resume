export interface AchievementGroup {
  category: string;
  items: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface TeamSection {
  name: string;
  summary?: string;
  glossary?: GlossaryTerm[];
  achievementGroups: AchievementGroup[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  role: string;
  summary: string;
  achievements?: string[];
  achievementGroups?: AchievementGroup[];
  teams?: TeamSection[];
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
  summary: 'Cloud Infrastructure Engineer with 4+ years of experience building and automating production infrastructure across AWS, Azure, Oracle Cloud, and Kubernetes. Reduced the observed upper end of VPN point-of-presence failure-detection time by approximately 70% and replaced a half-day manual multi-cloud credential rotation with a workflow that completes in under a minute. Delivered on-premises LLM inference on Kubernetes under a two-month deadline for a sovereign-cloud offering, and previously built a factory production platform spanning 60 lines that removed an estimated 63 person-hours of manual reconciliation per operating day.'
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
    role: 'Cloud Infrastructure Engineer',
    summary: 'Building and automating production infrastructure across two teams: a Zero Trust Network Access / Security SaaS platform, and AI infrastructure (Ray/vLLM model serving) for Trend AI.',
    teams: [
      {
        name: 'Zero Trust Network Access / Security SaaS Platform',
        summary: 'Cloud-native infrastructure automation, deployment reliability, and day-to-day operational improvements for production security SaaS services.',
        glossary: [
          {
            term: 'point of presence',
            definition: 'A point of presence (PoP) is like a nearby delivery station for internet messages. When you work away from the office, it securely passes messages between your device and private work apps, then brings their replies back.'
          }
        ],
        achievementGroups: [
          { category: 'Reliability engineering', items: ['Cut the observed upper bound on point-of-presence failure detection by approximately 70%, from around 5 minutes to roughly 90 seconds, by replacing stale heartbeat checks with Azure Traffic Manager endpoint-health monitoring and Redis-based coordination; detection is often faster depending on probe timing', 'Eliminated a recurring class of false-positive failovers triggered by IoT Hub outages by decoupling PoP health checks from IoT Hub heartbeat delivery'] },
          { category: 'Security automation', items: ['Automated quarterly API key and credential rotation across AWS, Azure, and Oracle Cloud, replacing an approximately 4-hour manual update-and-verification process with a workflow that completes in under 1 minute'] },
          { category: 'Infrastructure delivery', items: ['Led the staging-to-production rollout of a multi-availability-zone point of presence in Thailand, replacing cross-border routing through Singapore with local termination and cutting measured round-trip time by over 80% in customer-environment connectivity tests'] }
        ]
      },
      {
        name: 'AI Infrastructure / Trend AI',
        summary: 'AI infrastructure delivery workflows spanning Kubernetes, Helm, container images, observability, and deployment automation.',
        achievementGroups: [
          { category: 'On-premises AI delivery', items: ['Delivered LLM and embedding inference services on on-premises Kubernetes within a two-month deadline for the Sovereign and Private Cloud (SPC) offering, enabling self-hosted inference in customer-controlled infrastructure for government use cases'] },
          { category: 'AI serving pipeline', items: ['Integrated Helm chart CI/CD with versioned OCI artifact publishing to JFrog Artifactory, giving downstream model-serving deployments traceable build versions and pull references'] },
          { category: 'Observability', items: ['Developed a Helm-based observability and alerting design for Ray/vLLM inference, mapping service availability, latency degradation, GPU faults, and capacity-pressure signals to severity-based escalation paths'] }
        ]
      }
    ]
  },
  {
    period: 'Sep 2022 - Aug 2024',
    title: 'SRAM',
    role: 'Backend / DevOps Engineer / MES & Factory Digitalization Platform for Industrial Manufacturing',
    summary: 'Built a factory production monitoring platform end-to-end across 60 production lines in two plants, from Raspberry Pi edge clients through backend services to real-time shop-floor dashboards.',
    achievementGroups: [
      { category: 'Business impact', items: ['Removed an estimated 63 person-hours of manual work per operating day by automating shift-level production reconciliation, which previously took one operator 30 minutes per line per shift across 60 lines running three shifts at roughly 70% line utilization'] },
      { category: 'End-to-end system design', items: ['Designed and built the platform end-to-end, including Raspberry Pi edge clients publishing production data over MQTT, Spring Boot / Javalin microservices, and PostgreSQL / MongoDB / Redis data storage'] },
      { category: 'Operations & automation', items: ['Replaced walk-to-the-line downtime checks with real-time dashboards and audible floor alarms, making stoppages visible without manual line inspections', 'Embedded takt-time tracking into the dashboards to give operators continuous production pacing feedback', 'Automated provisioning and deployment across 60 production stations using Ansible and Docker Compose'] }
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
  },
  {
    id: 'pgconsole-migration', title: 'pgconsole Schema Migration', period: '2026/5', tooltip: 'Open-source fork',
    overview: 'Extended pgconsole with an end-to-end, Git-backed PostgreSQL schema migration workflow powered by pgschema, covering migration planning, DDL review, permission-gated apply, and runtime configuration.',
    architecture: 'Git schema repository → migration service → pgschema plan/apply → PostgreSQL, with React diff and progress UI',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'pgschema', 'Docker', 'Helm', 'GitHub Actions'],
    features: ['Built a migration service that synchronizes desired SQL schemas from Git, invokes pgschema to compare them with live databases, stores plans with a 30-minute TTL, and streams apply progress and errors to the UI', 'Implemented a React migration panel for grouped schema diffs, DDL previews, confirmation, and permission-gated apply operations', 'Replaced restart-dependent configuration with an opt-in _pgconsole JSONB metadata table and permission-controlled runtime management of schema sources', 'Containerized the integration for amd64/arm64, published images to GHCR, and created a Helm chart with ConfigMap-driven configuration, Ingress, HPA, and automatic rollout on config changes'],
    description: 'A pgconsole fork that integrates pgschema into the browser-based PostgreSQL workspace, turning schema files stored in Git into reviewable and executable database migration plans.',
    githubUrl: 'https://github.com/NFUChen/pgconsole'
  },
  {
    id: 'pgschema', title: 'pgschema — Open Source Contributor', period: '2026/5', tooltip: 'Open-source contribution',
    overview: 'Contributed to a Terraform-style declarative schema migration CLI for PostgreSQL that generates and safely applies migration plans from a desired SQL schema state.',
    architecture: 'Desired SQL schema → PostgreSQL-aware diff engine → reviewed migration plan → safe apply',
    technologies: ['Go', 'PostgreSQL', 'Cobra CLI', 'GitHub Actions', 'CI/CD'],
    features: ['Added apply-command file-extension validation with comprehensive test coverage, preventing unsupported plan inputs from reaching migration execution (merged PR #434)', 'Refactored release CI into a GitHub Actions matrix that tests PostgreSQL 14–18 concurrently, reducing duplication and improving failure visibility (merged PR #432)', 'Explored and proposed support for TOML configuration, multi-schema migrations, column rename detection, and PostgreSQL extensions through upstream PRs'],
    description: 'Open-source contributions to pgschema, a PostgreSQL-focused CLI that replaces hand-written, sequential migration files with a declarative dump, plan, and apply workflow.',
    githubUrl: 'https://github.com/pgplex/pgschema'
  }
];
