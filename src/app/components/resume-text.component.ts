import { Component, computed, input } from '@angular/core';
import { GlossaryTerm } from '../data/resume.data';
import { GlossaryTooltipComponent } from './glossary-tooltip.component';
import { parseResumeText } from './resume-text';

@Component({
  selector: 'app-resume-text',
  standalone: true,
  imports: [GlossaryTooltipComponent],
  template: `@for (segment of segments(); track $index) {@switch (segment.kind) {@case ('strong') {<strong>{{ segment.text }}</strong>} @case ('term') {<app-glossary-tooltip [term]="segment.text" [definition]="segment.definition" [inline]="true" />} @default {{{ segment.text }}}}}`,
  styles: [`:host { display: inline; }`]
})
export class ResumeTextComponent {
  readonly text = input.required<string>();
  readonly glossary = input<GlossaryTerm[]>([]);
  readonly segments = computed(() => parseResumeText(this.text(), this.glossary()));
}
