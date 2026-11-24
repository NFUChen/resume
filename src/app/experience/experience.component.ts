import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CursorSpotlightDirective } from '../components/cursor-spotlight.directive';
import { ResumeTextComponent } from '../components/resume-text.component';
import { EXPERIENCE, ExperienceItem } from '../data/resume.data';

export type SortOrder = 'newest' | 'oldest';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CursorSpotlightDirective, ResumeTextComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  readonly sortOptions: { value: SortOrder; label: string }[] = [
    { value: 'newest', label: 'Newest first' },
    { value: 'oldest', label: 'Oldest first' }
  ];

  readonly sortOrder = signal<SortOrder>('newest');

  // EXPERIENCE (and each item's teams) is stored newest first,
  // so "oldest" reverses both the jobs and the teams inside each job.
  readonly timeline = computed<ExperienceItem[]>(() =>
    this.sortOrder() === 'newest'
      ? EXPERIENCE
      : [...EXPERIENCE].reverse().map(item =>
          item.teams ? { ...item, teams: [...item.teams].reverse() } : item
        )
  );

  setSortOrder(order: SortOrder): void {
    this.sortOrder.set(order);
  }
}
