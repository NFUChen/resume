import { Component } from '@angular/core';
import { CursorSpotlightDirective } from './cursor-spotlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CursorSpotlightDirective],
  template: `
    <section class="about-hero px-4 pt-20 pb-14 text-center" appCursorSpotlight>
      <span class="rise-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-extrabold tracking-widest">
        AVAILABLE FOR INFRASTRUCTURE &amp; SRE ROLES
      </span>
      <h1 class="about-name rise-in stagger-1 text-5xl md:text-6xl font-black mt-6 mb-3">William Chen</h1>
      <p class="rise-in stagger-2 text-xl md:text-2xl font-semibold mb-3">Infrastructure / Site Reliability Engineer</p>
      <p class="rise-in stagger-3 text-base-content/65 mb-6">Kubernetes · Terraform · AI Infrastructure</p>
      <div class="rise-in stagger-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-base-content/75">
        <span class="inline-flex items-center gap-1.5">
          <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Chiayi County, Taiwan
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18M6 22h12M10 9h1M13 9h1M10 13h1M13 13h1M10 17h1M13 17h1" />
          </svg>
          Open to Taipei (Hybrid)
        </span>
        <a class="link link-primary inline-flex items-center gap-1.5" href="https://linkedin.com/in/william-chen-3258a6199" target="_blank" rel="noopener noreferrer">
          <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1" />
          </svg>
          LinkedIn
        </a>
        <a class="link link-primary inline-flex items-center gap-1.5" href="https://github.com/NFUChen" target="_blank" rel="noopener noreferrer">
          <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4a5 5 0 0 0-.1-3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.7-4-2" />
          </svg>
          GitHub
        </a>
      </div>
    </section>

    <div class="container mx-auto px-4 pb-16 max-w-4xl">
      <div class="card bg-base-200 shadow-xl hover-lift rise-in stagger-5">
        <div class="card-body">
          <div class="flex flex-col gap-8">
            <div>
              <h3 class="section-heading text-2xl font-bold mb-4">Professional Summary</h3>
              <p class="leading-relaxed text-base-content/80">
                Cloud Infrastructure Engineer with 4+ years of experience building and automating production infrastructure across AWS, Azure, Oracle Cloud, and Kubernetes environments. Supports AI infrastructure at Trend Micro through Ray/vLLM model-serving delivery, Helm-based CI/CD, and Prometheus observability for inference services. Brings hands-on Infrastructure-as-Code, deployment automation, cloud networking, and production reliability experience to AI/ML infrastructure operations.
              </p>

              <h3 class="section-heading text-2xl font-bold mb-4 mt-8">Focus Areas</h3>
              <ul class="focus-list grid sm:grid-cols-2 gap-3">
                <li class="focus-item">Production Kubernetes infrastructure and Helm-based application delivery</li>
                <li class="focus-item">Infrastructure as Code and deployment automation with Terraform and Ansible</li>
                <li class="focus-item">Multi-cloud operations across AWS, Microsoft Azure, and Oracle Cloud Infrastructure</li>
                <li class="focus-item">AI model-serving infrastructure with Ray and vLLM</li>
                <li class="focus-item">Prometheus observability, alerting, and production incident response</li>
                <li class="focus-item">Cloud networking, WireGuard VPN, and regional reliability engineering</li>
                <li class="focus-item">Open-source framework development through the PySpring project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-hero {
      position: relative;
      overflow: hidden;
      background:
        radial-gradient(circle at 50% -10%, color-mix(in oklab, var(--color-primary) 20%, transparent), transparent 55%),
        radial-gradient(circle at 12% 30%, color-mix(in oklab, var(--color-secondary) 12%, transparent), transparent 45%),
        radial-gradient(circle at 88% 20%, color-mix(in oklab, var(--color-accent) 12%, transparent), transparent 45%);
    }

    .about-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0.25;
      background-image:
        linear-gradient(color-mix(in oklab, var(--color-base-content) 8%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in oklab, var(--color-base-content) 8%, transparent) 1px, transparent 1px);
      background-size: 42px 42px;
      mask-image: radial-gradient(circle at 50% 20%, black, transparent 70%);
    }

    .about-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: var(--spotlight-opacity, 0);
      background-image:
        linear-gradient(color-mix(in oklab, var(--color-primary) 55%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 55%, transparent) 1px, transparent 1px);
      background-size: 42px 42px;
      mask-image: radial-gradient(circle 150px at var(--cursor-x, 50%) var(--cursor-y, 50%), black, transparent);
      transition: opacity 240ms ease;
    }

    .about-hero > * {
      position: relative;
      z-index: 1;
    }

    .meta-icon {
      width: 1rem;
      height: 1rem;
      flex: 0 0 auto;
      color: var(--color-primary);
    }

    .about-name {
      background-image: linear-gradient(
        110deg,
        var(--color-base-content) 15%,
        var(--color-primary) 42%,
        color-mix(in oklab, var(--color-secondary) 65%, var(--color-primary)) 52%,
        var(--color-primary) 62%,
        var(--color-base-content) 85%
      );
      background-size: 220% 100%;
      background-position: 100% 50%;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      animation:
        rise-in 520ms cubic-bezier(0.22, 1, 0.36, 1) both,
        title-gradient-flow 8s ease-in-out 600ms infinite alternate;
    }

    @keyframes title-gradient-flow {
      from { background-position: 100% 50%; }
      to { background-position: 0% 50%; }
    }

    @media (prefers-reduced-motion: reduce) {
      .about-name {
        animation: none;
        background-position: 50% 50%;
      }

      .about-hero::after {
        display: none;
      }
    }

    @media (hover: none), (pointer: coarse) {
      .about-hero::after {
        display: none;
      }
    }

    .section-heading {
      position: relative;
      padding-left: 0.9rem;
    }

    .section-heading::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.15rem;
      bottom: 0.15rem;
      width: 4px;
      border-radius: 999px;
      background: var(--color-primary);
    }

    .focus-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .focus-item {
      position: relative;
      padding: 0.7rem 0.9rem 0.7rem 2rem;
      border-radius: 0.65rem;
      background: color-mix(in oklab, var(--color-primary) 6%, transparent);
      border: 1px solid color-mix(in oklab, var(--color-primary) 14%, transparent);
      font-size: 0.92rem;
      line-height: 1.5;
      transition: transform 200ms ease, border-color 200ms ease;
    }

    .focus-item::before {
      content: '';
      position: absolute;
      left: 0.85rem;
      top: 0.95rem;
      width: 0.42rem;
      height: 0.42rem;
      border-radius: 999px;
      background: var(--color-primary);
      box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent);
    }

    .focus-item:hover {
      transform: translateX(4px);
      border-color: color-mix(in oklab, var(--color-primary) 40%, transparent);
    }
  `]
})
export class AboutComponent {} 