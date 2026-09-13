import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  iconPath: string;
  title: string;
  badgeClass: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-page px-4 py-16">
      <div class="container mx-auto max-w-6xl">
        <header class="text-center mb-12">
          <span class="skills-kicker">TECHNICAL TOOLBOX</span>
          <h2 class="skills-title text-4xl font-black mt-3">Core Skills</h2>
          <p class="max-w-2xl mx-auto mt-4 text-base-content/65">
            Day-to-day tooling across infrastructure automation, multi-cloud operations, AI model serving, and observability.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (group of skillGroups; track group.title; let index = $index) {
            <div class="skill-card card bg-base-200 shadow-xl rise-in hover-lift" [style.animation-delay.ms]="index * 80">
              <div class="card-body">
                <h3 class="card-title text-xl mb-4">
                  <span class="skill-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path [attr.d]="group.iconPath" />
                    </svg>
                  </span>
                  {{ group.title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  @for (item of group.items; track item) {
                    <div [class]="'badge tech-badge ' + group.badgeClass">{{ item }}</div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-page {
      min-height: calc(100vh - 4rem);
      position: relative;
      overflow: hidden;
      background:
        radial-gradient(circle at 15% 8%, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 30rem),
        radial-gradient(circle at 85% 25%, color-mix(in oklab, var(--color-accent) 12%, transparent), transparent 28rem),
        linear-gradient(180deg, var(--color-base-100), var(--color-base-200));
    }

    .skills-page::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0.25;
      background-image:
        linear-gradient(color-mix(in oklab, var(--color-base-content) 8%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in oklab, var(--color-base-content) 8%, transparent) 1px, transparent 1px);
      background-size: 46px 46px;
      mask-image: linear-gradient(to bottom, black, transparent 75%);
    }

    .skills-page > div {
      position: relative;
      z-index: 1;
    }

    .skills-kicker {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      border: 1px solid color-mix(in oklab, var(--color-primary) 35%, transparent);
      border-radius: 999px;
      background: color-mix(in oklab, var(--color-primary) 10%, transparent);
      color: var(--color-primary);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.16em;
    }

    .skills-title {
      background: linear-gradient(110deg, var(--color-base-content), var(--color-primary));
      background-clip: text;
      color: transparent;
    }

    .skill-card {
      position: relative;
      overflow: hidden;
      border: 1px solid color-mix(in oklab, var(--color-base-content) 10%, transparent);
      background: color-mix(in oklab, var(--color-base-200) 88%, transparent);
      backdrop-filter: blur(14px);
    }

    .skill-card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 3px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .skill-card:hover::before {
      transform: scaleX(1);
    }

    .skill-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 0.6rem;
      border-radius: 0.75rem;
      background: color-mix(in oklab, var(--color-primary) 12%, transparent);
      color: var(--color-primary);
      transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .skill-icon svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    .skill-card:hover .skill-icon {
      transform: rotate(-8deg) scale(1.08);
    }
  `]
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      // box (container)
      iconPath: 'M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8ZM3.3 7l8.7 5 8.7-5M12 22V12',
      title: 'Container & Orchestration',
      badgeClass: 'badge-primary',
      items: ['Kubernetes', 'Helm', 'Docker', 'Docker Compose']
    },
    {
      // wrench/tool
      iconPath: 'M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.65 2.65-2.12-2.12Z',
      title: 'Infrastructure & Automation',
      badgeClass: 'badge-accent',
      items: ['Terraform', 'Ansible', 'GitHub Actions', 'CI/CD', 'Linux']
    },
    {
      // cloud
      iconPath: 'M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A4 4 0 0 0 6.5 19h11Z',
      title: 'Cloud Platforms',
      badgeClass: 'badge-neutral',
      items: ['AWS', 'Microsoft Azure', 'Oracle Cloud Infrastructure']
    },
    {
      // cpu (AI/ML)
      iconPath: 'M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7z',
      title: 'AI / ML Infrastructure',
      badgeClass: 'badge-warning',
      items: ['Ray', 'vLLM model serving']
    },
    {
      // activity/pulse (observability)
      iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
      title: 'Observability',
      badgeClass: 'badge-info',
      items: ['Prometheus', 'Grafana', 'Opentelemetry']
    },
    {
      // shield/lock (security)
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
      title: 'Networking & Security',
      badgeClass: 'badge-secondary',
      items: ['WireGuard', 'VPN Technology']
    },
    {
      // code brackets
      iconPath: 'm16 18 6-6-6-6M8 6l-6 6 6 6',
      title: 'Programming',
      badgeClass: 'badge-primary',
      items: ['Python', 'Go', 'Java (Spring Boot)', 'TypeScript (Angular)']
    }
  ];
}
