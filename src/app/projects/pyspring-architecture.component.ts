import { Component } from '@angular/core';

/** Core runtime architecture verified from the pyspring-core repository. */
@Component({
  selector: 'app-pyspring-architecture',
  standalone: true,
  template: `
    <svg
      class="diagram"
      viewBox="0 0 980 560"
      role="img"
      aria-label="Architecture diagram of the PySpring framework core"
    >
      <defs>
        <marker id="ps-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" class="arrow-head" />
        </marker>
      </defs>

      <!-- Application code -->
      <rect class="boundary" x="24" y="28" width="212" height="222" rx="14" />
      <text class="boundary-title" x="42" y="52">APPLICATION CODE</text>

      <rect class="box" x="42" y="68" width="176" height="34" rx="8" />
      <text class="title" x="130" y="90">Component</text>

      <rect class="box" x="42" y="110" width="176" height="34" rx="8" />
      <text class="title" x="130" y="132">RestController</text>

      <rect class="box" x="42" y="152" width="176" height="34" rx="8" />
      <text class="title" x="130" y="174">Properties · BeanCollection</text>

      <rect class="box" x="42" y="194" width="176" height="34" rx="8" />
      <text class="title" x="130" y="216">Middleware · Starter</text>

      <!-- Bootstrap -->
      <rect class="boundary accent-boundary" x="286" y="28" width="222" height="222" rx="14" />
      <text class="boundary-title accent-text" x="304" y="52">BOOTSTRAP</text>

      <rect class="box accent" x="304" y="68" width="186" height="58" rx="9" />
      <text class="title" x="397" y="92">PySpringApplication</text>
      <text class="sub" x="397" y="110">app-config · lifecycle</text>

      <rect class="box" x="304" y="140" width="186" height="46" rx="9" />
      <text class="title" x="397" y="162">Class scanner</text>
      <text class="sub" x="397" y="178">AST scan · import</text>

      <rect class="box" x="304" y="196" width="186" height="46" rx="9" />
      <text class="title" x="397" y="218">Application registry</text>
      <text class="sub" x="397" y="234">Routes · listeners</text>

      <!-- IoC container -->
      <rect class="boundary accent-boundary" x="558" y="28" width="398" height="222" rx="14" />
      <text class="boundary-title accent-text" x="576" y="52">IOC CONTAINER · APPLICATION CONTEXT</text>

      <rect class="box accent" x="576" y="68" width="176" height="58" rx="9" />
      <text class="title" x="664" y="92">Component manager</text>
      <text class="sub" x="664" y="110">Singleton · prototype</text>

      <rect class="box" x="764" y="68" width="176" height="58" rx="9" />
      <text class="title" x="852" y="92">Bean manager</text>
      <text class="sub" x="852" y="110">create* factories</text>

      <rect class="box" x="576" y="140" width="176" height="58" rx="9" />
      <text class="title" x="664" y="164">Properties manager</text>
      <text class="sub" x="664" y="182">JSON · YAML · env vars</text>

      <rect class="box accent" x="764" y="140" width="176" height="58" rx="9" />
      <text class="title" x="852" y="164">Field injector</text>
      <text class="sub" x="852" y="182">Annotations · qualifiers</text>

      <text class="annotation" x="576" y="224">Abstract types resolve to a single implementation, or an explicit qualifier.</text>
      <text class="annotation" x="576" y="240">Lifecycle hooks: post_construct on startup, pre_destroy on shutdown.</text>

      <!-- Web runtime -->
      <rect class="boundary" x="24" y="292" width="560" height="152" rx="14" />
      <text class="boundary-title" x="42" y="316">WEB RUNTIME</text>

      <rect class="box" x="42" y="332" width="160" height="58" rx="9" />
      <text class="title" x="122" y="356">Route metadata</text>
      <text class="sub" x="122" y="374">&#64;GetMapping · &#64;PostMapping</text>

      <rect class="box accent" x="216" y="332" width="160" height="58" rx="9" />
      <text class="title" x="296" y="356">FastAPI routers</text>
      <text class="sub" x="296" y="374">Bound controller methods</text>

      <rect class="box" x="390" y="332" width="176" height="58" rx="9" />
      <text class="title" x="478" y="356">Uvicorn ASGI server</text>
      <text class="sub" x="478" y="374">HTTP entry point</text>

      <text class="annotation" x="42" y="414">Ordered Starlette middleware wraps every request.</text>
      <text class="annotation" x="42" y="430">FastAPI generates OpenAPI and Swagger UI from forwarded route metadata.</text>

      <!-- Event system -->
      <rect class="boundary" x="608" y="292" width="348" height="152" rx="14" />
      <text class="boundary-title" x="626" y="316">EVENT SYSTEM</text>

      <rect class="box" x="626" y="332" width="142" height="58" rx="9" />
      <text class="title" x="697" y="356">Publisher</text>
      <text class="sub" x="697" y="374">publish(event)</text>

      <rect class="box accent" x="790" y="332" width="148" height="58" rx="9" />
      <text class="title" x="864" y="356">Worker thread</text>
      <text class="sub" x="864" y="374">Queue consumer</text>

      <text class="annotation" x="626" y="414">Listeners registered with &#64;EventListener run sequentially,</text>
      <text class="annotation" x="626" y="430">off the request thread, isolating publishers from handlers.</text>

      <!-- Connections -->
      <path class="link" d="M236 139 H286" marker-end="url(#ps-arrow)" />
      <text class="edge-label" x="261" y="130">scan</text>

      <path class="link" d="M508 139 H558" marker-end="url(#ps-arrow)" />
      <text class="edge-label" x="533" y="130">register</text>

      <path class="link" d="M397 250 V292 H122 V332" marker-end="url(#ps-arrow)" />
      <path class="link accent-link" d="M852 250 V292 H697 V332" marker-end="url(#ps-arrow)" />

      <path class="link" d="M202 361 H216" marker-end="url(#ps-arrow)" />
      <path class="link" d="M376 361 H390" marker-end="url(#ps-arrow)" />
      <path class="link" d="M768 361 H790" marker-end="url(#ps-arrow)" />

      <!-- Extension note -->
      <rect class="note" x="24" y="480" width="932" height="46" rx="10" />
      <text class="note-text" x="490" y="502">Starter modules contribute components, beans, properties, and controllers</text>
      <text class="note-text" x="490" y="518">through Python entry points, extending the container without touching the core</text>
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
      font-size: 12px;
      font-weight: 700;
      text-anchor: middle;
    }

    .sub {
      fill: color-mix(in oklab, var(--color-base-content) 64%, transparent);
      font-size: 10.5px;
      text-anchor: middle;
    }

    .annotation {
      fill: color-mix(in oklab, var(--color-base-content) 62%, transparent);
      font-size: 10.5px;
    }

    .note {
      fill: color-mix(in oklab, var(--color-primary) 7%, transparent);
      stroke: color-mix(in oklab, var(--color-primary) 22%, transparent);
      stroke-width: 1;
    }

    .note-text {
      fill: color-mix(in oklab, var(--color-base-content) 70%, transparent);
      font-size: 10.5px;
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
  `]
})
export class PySpringArchitectureComponent {}
