import { Component } from '@angular/core';

/** Core runtime architecture verified from the wg-control-plane repository. */
@Component({
  selector: 'app-wireguard-architecture',
  standalone: true,
  template: `
    <svg
      class="diagram"
      viewBox="0 0 980 520"
      role="img"
      aria-label="Architecture diagram of the WireGuard Control Plane"
    >
      <defs>
        <marker id="wg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" class="arrow-head" />
        </marker>
      </defs>

      <!-- User interface -->
      <rect class="boundary" x="24" y="32" width="190" height="132" rx="14" />
      <text class="boundary-title" x="42" y="56">ADMIN EXPERIENCE</text>
      <rect class="box" x="42" y="76" width="154" height="66" rx="9" />
      <text class="title" x="119" y="101">Angular 19 SPA</text>
      <text class="sub" x="119" y="120">Server · client · host UI</text>

      <!-- Control-plane application -->
      <rect class="boundary accent-boundary" x="260" y="32" width="438" height="310" rx="14" />
      <text class="boundary-title accent-text" x="278" y="56">WG CONTROL PLANE · PURE_REMOTE</text>

      <rect class="box accent" x="280" y="76" width="184" height="66" rx="9" />
      <text class="title" x="372" y="101">Spring Boot API</text>
      <text class="sub" x="372" y="120">Kotlin · JWT · REST</text>

      <rect class="box" x="494" y="76" width="184" height="66" rx="9" />
      <text class="title" x="586" y="101">PostgreSQL</text>
      <text class="sub" x="586" y="120">Desired state + job history</text>

      <rect class="box" x="280" y="184" width="184" height="72" rx="9" />
      <text class="title" x="372" y="208">Config generator</text>
      <text class="sub" x="372" y="227">WireGuard templates</text>
      <text class="sub" x="372" y="244">Dynamic inventory</text>

      <rect class="box accent" x="494" y="184" width="184" height="72" rx="9" />
      <text class="title" x="586" y="208">Ansible job engine</text>
      <text class="sub" x="586" y="227">Execute · cancel · retry</text>
      <text class="sub" x="586" y="244">stdout · stderr · status</text>

      <rect class="note" x="280" y="286" width="398" height="36" rx="8" />
      <text class="note-text" x="479" y="308">Each rollout materializes a one-host inventory and temporary SSH key</text>

      <!-- Managed infrastructure -->
      <rect class="boundary" x="744" y="32" width="212" height="310" rx="14" />
      <text class="boundary-title" x="762" y="56">MANAGED INFRASTRUCTURE</text>

      <rect class="box" x="762" y="76" width="176" height="72" rx="9" />
      <text class="title" x="850" y="101">Linux VPN host</text>
      <text class="sub" x="850" y="120">WireGuard interface</text>
      <text class="sub" x="850" y="136">Remote lifecycle target</text>

      <rect class="box" x="762" y="184" width="176" height="72" rx="9" />
      <text class="title" x="850" y="208">WireGuard peers</text>
      <text class="sub" x="850" y="227">Servers · clients</text>
      <text class="sub" x="850" y="244">Site-to-site connectivity</text>

      <rect class="note" x="762" y="286" width="176" height="36" rx="8" />
      <text class="note-text" x="850" y="308">Status via verification playbook</text>

      <!-- Primary data flow -->
      <path class="link" d="M214 109 H280" marker-end="url(#wg-arrow)" />
      <text class="edge-label" x="247" y="98">HTTPS / JSON</text>

      <path class="link" d="M464 109 H494" marker-end="url(#wg-arrow)" marker-start="url(#wg-arrow)" />
      <text class="edge-label" x="479" y="98">JPA</text>

      <path class="link" d="M372 142 V184" marker-end="url(#wg-arrow)" />
      <path class="link" d="M464 220 H494" marker-end="url(#wg-arrow)" />

      <path class="link accent-link" d="M678 220 H718 V112 H762" marker-end="url(#wg-arrow)" />
      <text class="edge-label" x="718" y="168">Ansible over SSH</text>

      <path class="link" d="M850 148 V184" marker-end="url(#wg-arrow)" />

      <!-- Rollout lifecycle -->
      <rect class="boundary lifecycle" x="108" y="390" width="764" height="96" rx="14" />
      <text class="boundary-title" x="126" y="414">ROLLOUT LIFECYCLE</text>

      <g>
        <rect class="chip" x="126" y="432" width="126" height="30" rx="15" />
        <text class="chip-text" x="189" y="451">Desired state</text>
        <text class="flow" x="270" y="452">→</text>

        <rect class="chip" x="288" y="432" width="142" height="30" rx="15" />
        <text class="chip-text" x="359" y="451">Generate config</text>
        <text class="flow" x="448" y="452">→</text>

        <rect class="chip" x="466" y="432" width="142" height="30" rx="15" />
        <text class="chip-text" x="537" y="451">Execute playbook</text>
        <text class="flow" x="626" y="452">→</text>

        <rect class="chip accent-chip" x="644" y="432" width="210" height="30" rx="15" />
        <text class="chip-text" x="749" y="451">Persist result + allow retry</text>
      </g>
    </svg>
  `,
  styles: [`
    .diagram {
      display: block;
      width: 100%;
      height: auto;
    }

    .boundary {
      fill: color-mix(in oklab, var(--color-base-content) 3%, transparent);
      stroke: color-mix(in oklab, var(--color-base-content) 20%, transparent);
      stroke-width: 1;
      stroke-dasharray: 6 5;
    }

    .accent-boundary {
      fill: color-mix(in oklab, var(--color-primary) 4%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 30%, transparent);
    }

    .lifecycle {
      fill: color-mix(in oklab, var(--color-primary) 3%, transparent);
    }

    .boundary-title {
      fill: color-mix(in oklab, var(--color-base-content) 68%, transparent);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.09em;
    }

    .accent-text {
      fill: var(--color-primary);
    }

    .box {
      fill: color-mix(in oklab, var(--color-base-100) 92%, transparent);
      stroke: color-mix(in oklab, var(--color-base-content) 18%, transparent);
      stroke-width: 1;
    }

    .box.accent {
      fill: color-mix(in oklab, var(--color-primary) 9%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 52%, transparent);
    }

    .title {
      fill: var(--color-base-content);
      font-size: 12.5px;
      font-weight: 750;
      text-anchor: middle;
    }

    .sub {
      fill: color-mix(in oklab, var(--color-base-content) 64%, transparent);
      font-size: 10.5px;
      text-anchor: middle;
    }

    .note {
      fill: color-mix(in oklab, var(--color-primary) 8%, transparent);
    }

    .note-text {
      fill: color-mix(in oklab, var(--color-base-content) 68%, transparent);
      font-size: 10px;
      font-weight: 600;
      text-anchor: middle;
    }

    .link {
      fill: none;
      stroke: color-mix(in oklab, var(--color-base-content) 42%, transparent);
      stroke-width: 1.5;
    }

    .accent-link {
      stroke: color-mix(in oklab, var(--color-primary) 68%, transparent);
    }

    .arrow-head {
      fill: color-mix(in oklab, var(--color-base-content) 56%, transparent);
    }

    .edge-label {
      fill: color-mix(in oklab, var(--color-base-content) 58%, transparent);
      font-size: 9.5px;
      text-anchor: middle;
    }

    .chip {
      fill: color-mix(in oklab, var(--color-primary) 11%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 28%, transparent);
      stroke-width: 1;
    }

    .accent-chip {
      fill: color-mix(in oklab, var(--color-primary) 20%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 50%, transparent);
    }

    .chip-text {
      fill: color-mix(in oklab, var(--color-base-content) 82%, transparent);
      font-size: 10.5px;
      font-weight: 650;
      text-anchor: middle;
    }

    .flow {
      fill: color-mix(in oklab, var(--color-primary) 72%, transparent);
      font-size: 15px;
      font-weight: 800;
      text-anchor: middle;
    }
  `]
})
export class WireGuardArchitectureComponent {}
