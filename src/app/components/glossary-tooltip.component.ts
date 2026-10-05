import { Component, Input } from '@angular/core';

/**
 * Inline jargon explainer. Renders a muted chip that reveals a plain-language
 * definition on hover, focus, or tap.
 */
@Component({
  selector: 'app-glossary-tooltip',
  standalone: true,
  template: `
    <span class="glossary-tooltip tooltip" [attr.data-tip]="definition">
      <span class="glossary-term" tabindex="0" role="note" [attr.aria-label]="term + ': ' + definition">
        <svg class="glossary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v-5M12 8h.01" />
        </svg>
        {{ term }}
      </span>
    </span>
  `,
  styles: [`
    .glossary-tooltip {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Tooltips default to a narrow single line; a definition needs room. */
    .glossary-tooltip:before {
      width: min(22rem, 72vw);
      white-space: normal;
      text-align: left;
      line-height: 1.55;
      font-size: 0.8rem;
      font-weight: 400;
    }

    .glossary-term {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      cursor: help;
      padding: 0.1rem 0.55rem 0.14rem;
      border: 1px solid oklch(from var(--color-base-content) l c h / 0.16);
      border-radius: 999px;
      background: oklch(from var(--color-base-content) l c h / 0.05);
      color: oklch(from var(--color-base-content) l c h / 0.6);
      font-size: 0.78rem;
      font-weight: 500;
      line-height: 1.5;
      transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;
    }

    .glossary-term:hover,
    .glossary-term:focus-visible {
      color: var(--color-primary);
      border-color: oklch(from var(--color-primary) l c h / 0.4);
      background: oklch(from var(--color-primary) l c h / 0.08);
    }

    .glossary-term:focus-visible {
      outline: 2px solid oklch(from var(--color-primary) l c h / 0.45);
      outline-offset: 2px;
    }

    .glossary-icon {
      width: 0.85em;
      height: 0.85em;
      flex-shrink: 0;
      opacity: 0.7;
    }
  `]
})
export class GlossaryTooltipComponent {
  @Input({ required: true }) term!: string;
  @Input({ required: true }) definition!: string;
}
