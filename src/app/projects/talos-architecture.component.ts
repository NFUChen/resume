import { Component } from '@angular/core';

/**
 * Architecture diagram for the Talos Kubernetes cluster on AWS.
 * Rendered as inline SVG so it inherits the active daisyUI theme.
 */
@Component({
  selector: 'app-talos-architecture',
  standalone: true,
  template: `
    <svg
      class="talos-diagram"
      viewBox="0 0 980 660"
      role="img"
      aria-label="Architecture diagram of the Talos Kubernetes cluster on AWS"
    >
      <defs>
        <marker id="talos-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" class="arrow-head" />
        </marker>
      </defs>

      <!-- ===== Ingress path (workload traffic) ===== -->
      <g>
        <rect class="box" x="40" y="20" width="200" height="46" rx="8" />
        <text class="title" x="140" y="40">Internet users</text>
        <text class="sub" x="140" y="56">HTTPS</text>

        <rect class="box" x="40" y="86" width="200" height="46" rx="8" />
        <text class="title" x="140" y="106">Route 53</text>
        <text class="sub" x="140" y="122">wildcard DNS + ACM TLS</text>

        <rect class="box accent" x="40" y="152" width="200" height="46" rx="8" />
        <text class="title" x="140" y="172">Application Load Balancer</text>
        <text class="sub" x="140" y="188">:80 redirect to :443</text>
      </g>

      <!-- ===== Control path (cluster management) ===== -->
      <g>
        <rect class="box" x="260" y="20" width="200" height="46" rx="8" />
        <text class="title" x="360" y="40">Cluster Admin</text>
        <text class="sub" x="360" y="56">talosctl · kubectl</text>

        <rect class="box accent" x="260" y="110" width="200" height="46" rx="8" />
        <text class="title" x="360" y="130">Network Load Balancer</text>
        <text class="sub" x="360" y="146">TCP :6443</text>
      </g>

      <!-- ===== Connectors into the VPC ===== -->
      <path class="link" d="M140 66 V86" marker-end="url(#talos-arrow)" />
      <path class="link" d="M140 132 V152" marker-end="url(#talos-arrow)" />
      <path class="link" d="M140 198 V300" marker-end="url(#talos-arrow)" />
      <text class="edge-label" x="150" y="243">NodePort :30443</text>

      <path class="link" d="M360 66 V110" marker-end="url(#talos-arrow)" />
      <path class="link" d="M360 156 V300" marker-end="url(#talos-arrow)" />
      <text class="edge-label" x="370" y="243">Kubernetes API</text>

      <!-- ===== AWS VPC ===== -->
      <rect class="region" x="20" y="256" width="700" height="286" rx="14" />
      <text class="region-label" x="38" y="280">AWS Region · VPC · 3 public subnets across 3 availability zones</text>

      <rect class="box" x="40" y="300" width="200" height="68" rx="8" />
      <text class="title" x="140" y="322">Worker ASG</text>
      <text class="sub" x="140" y="340">Spot t3.large · 0–5 nodes</text>
      <text class="sub" x="140" y="356">ephemeral · self-healing</text>

      <rect class="box" x="260" y="300" width="200" height="68" rx="8" />
      <text class="title" x="360" y="322">Talos control plane</text>
      <text class="sub" x="360" y="340">1× t3.medium</text>
      <text class="sub" x="360" y="356">long-lived · KubeSpan</text>

      <rect class="box" x="480" y="300" width="200" height="68" rx="8" />
      <text class="title" x="580" y="322">WireGuard gateway</text>
      <text class="sub" x="580" y="340">EC2 + Elastic IP</text>
      <text class="sub" x="580" y="356">site-to-site VPN</text>

      <!-- ===== Worker lifecycle ===== -->
      <rect class="box subtle" x="40" y="396" width="315" height="124" rx="10" />
      <text class="group-title" x="56" y="420">WORKER LIFECYCLE</text>

      <rect class="chip accent" x="56" y="436" width="136" height="26" rx="13" />
      <text class="chip-text" x="124" y="453">Cluster Autoscaler</text>
      <text class="flow-symbol" x="202" y="454">→</text>
      <rect class="chip accent" x="216" y="436" width="122" height="26" rx="13" />
      <text class="chip-text" x="277" y="453">Worker ASG</text>

      <text class="annotation" x="56" y="485">Autoscaler adjusts desired capacity.</text>
      <text class="annotation" x="56" y="502">ASG replaces interrupted Spot workers.</text>

      <!-- ===== Cluster services ===== -->
      <rect class="box subtle" x="370" y="396" width="330" height="124" rx="10" />
      <text class="group-title" x="386" y="420">CLUSTER SERVICES</text>

      <rect class="chip" x="386" y="436" width="132" height="26" rx="13" />
      <text class="chip-text" x="452" y="453">Traefik ingress</text>

      <rect class="chip" x="530" y="436" width="138" height="26" rx="13" />
      <text class="chip-text" x="599" y="453">Metrics Server</text>

      <rect class="chip" x="386" y="474" width="132" height="26" rx="13" />
      <text class="chip-text" x="452" y="491">EBS CSI · gp3</text>

      <text class="annotation" x="530" y="489">Talos v1.11 · Kubernetes v1.34</text>

      <path class="link" d="M140 368 V396" marker-end="url(#talos-arrow)" />
      <path class="link" d="M360 368 V382 H535 V396" marker-end="url(#talos-arrow)" />

      <!-- ===== Remote sites ===== -->
      <rect class="region muted" x="750" y="286" width="200" height="96" rx="12" />
      <text class="region-label" x="768" y="310">Peered networks</text>
      <text class="sub left" x="768" y="332">On-premise network</text>
      <text class="sub left" x="768" y="350">Remote cloud region</text>
      <text class="sub left" x="768" y="368">encrypted overlay routing</text>

      <path class="link dashed" d="M680 334 H750" marker-end="url(#talos-arrow)" marker-start="url(#talos-arrow)" />

      <!-- ===== Managed AWS services ===== -->
      <rect class="box" x="40" y="576" width="200" height="52" rx="8" />
      <text class="title" x="140" y="598">RDS PostgreSQL 15</text>
      <text class="sub" x="140" y="614">automated snapshots</text>

      <rect class="box" x="260" y="576" width="200" height="52" rx="8" />
      <text class="title" x="360" y="598">Amazon EFS</text>
      <text class="sub" x="360" y="614">shared storage</text>

      <rect class="box" x="480" y="576" width="200" height="52" rx="8" />
      <text class="title" x="580" y="598">Amazon SQS</text>
      <text class="sub" x="580" y="614">queues + DLQ</text>

      <path class="link" d="M140 520 V576" marker-end="url(#talos-arrow)" />
      <path class="link" d="M360 520 V576" marker-end="url(#talos-arrow)" />
      <path class="link" d="M520 520 V548 H580 V576" marker-end="url(#talos-arrow)" />

      <!-- ===== Provisioning note ===== -->
      <text class="footnote" x="750" y="576">Provisioned with Terraform</text>
      <text class="footnote" x="750" y="596">Talos machine configs</text>
      <text class="footnote" x="750" y="616">generated and bootstrapped</text>
    </svg>
  `,
  styles: [`
    .talos-diagram {
      width: 100%;
      height: auto;
      display: block;
    }

    .box {
      fill: color-mix(in oklab, var(--color-base-100) 92%, transparent);
      stroke: color-mix(in oklab, var(--color-base-content) 18%, transparent);
      stroke-width: 1;
    }

    .box.accent {
      stroke: color-mix(in oklab, var(--color-primary) 55%, transparent);
      fill: color-mix(in oklab, var(--color-primary) 8%, transparent);
    }

    .box.subtle {
      fill: color-mix(in oklab, var(--color-primary) 5%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 22%, transparent);
    }

    .region {
      fill: color-mix(in oklab, var(--color-base-content) 4%, transparent);
      stroke: color-mix(in oklab, var(--color-base-content) 22%, transparent);
      stroke-width: 1;
      stroke-dasharray: 6 5;
    }

    .region.muted {
      fill: color-mix(in oklab, var(--color-base-content) 3%, transparent);
    }

    .region-label {
      fill: color-mix(in oklab, var(--color-base-content) 75%, transparent);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    .title {
      fill: var(--color-base-content);
      font-size: 12.5px;
      font-weight: 700;
      text-anchor: middle;
    }

    .sub {
      fill: color-mix(in oklab, var(--color-base-content) 65%, transparent);
      font-size: 11px;
      text-anchor: middle;
    }

    .sub.left {
      text-anchor: start;
    }

    .group-title {
      fill: var(--color-primary);
      font-size: 11.5px;
      font-weight: 800;
      letter-spacing: 0.05em;
    }

    .chip {
      fill: color-mix(in oklab, var(--color-primary) 12%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 28%, transparent);
      stroke-width: 1;
    }

    .chip.accent {
      fill: color-mix(in oklab, var(--color-primary) 22%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 55%, transparent);
    }

    .annotation {
      fill: color-mix(in oklab, var(--color-base-content) 62%, transparent);
      font-size: 10.5px;
    }

    .flow-symbol {
      fill: color-mix(in oklab, var(--color-primary) 70%, transparent);
      font-size: 14px;
      font-weight: 700;
      text-anchor: middle;
    }

    .chip-text {
      fill: color-mix(in oklab, var(--color-base-content) 82%, transparent);
      font-size: 11px;
      font-weight: 600;
      text-anchor: middle;
    }

    .link {
      fill: none;
      stroke: color-mix(in oklab, var(--color-base-content) 45%, transparent);
      stroke-width: 1.5;
    }

    .link.dashed {
      stroke-dasharray: 5 4;
      stroke: color-mix(in oklab, var(--color-primary) 65%, transparent);
    }

    .arrow-head {
      fill: color-mix(in oklab, var(--color-base-content) 55%, transparent);
    }

    .edge-label {
      fill: color-mix(in oklab, var(--color-base-content) 60%, transparent);
      font-size: 10.5px;
      font-weight: 600;
    }

    .footnote {
      fill: color-mix(in oklab, var(--color-base-content) 55%, transparent);
      font-size: 11px;
    }
  `]
})
export class TalosArchitectureComponent {}
