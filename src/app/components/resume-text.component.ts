import { Component, computed, input } from '@angular/core';
import { GlossaryTerm } from '../data/resume.data';
import { GlossaryTooltipComponent } from './glossary-tooltip.component';
import { parseResumeText } from './resume-text';

@Component({
  selector: 'app-resume-text',
  standalone: true,
  imports: [GlossaryTooltipComponent],
  template: `@for (segment of segments(); track $index) {@switch (segment.kind) {@case ('strong') {<strong>{{ segment.text }}</strong>} @case ('term') {<app-glossary-tooltip [term]="segment.text" [definition]="segment.definition" [inline]="true" />} @default {{{ segment.text }}}}}`,
  styles: [`
    :host { display: inline; }

    /* Quantified outcomes get their own hue so they read as results rather than
       competing with the primary-coloured category headings. */
    strong {
      font-weight: 700;
      color: var(--metric-color, #0f766e);
    }

    :host-context([data-theme='dark']) strong {
      --metric-color: #7dd3c0;
    }
  `]
})
export class ResumeTextComponent {
  readonly text = input.required<string>();
  readonly glossary = input<GlossaryTerm[]>([]);
  readonly segments = computed(() => parseResumeText(this.text(), this.glossary()));
}
