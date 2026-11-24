import { TestBed } from '@angular/core/testing';
import { EXPERIENCE } from '../data/resume.data';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  function renderedPeriods(element: HTMLElement): string[] {
    return Array.from(element.querySelectorAll('.period-badge')).map(badge => badge.textContent?.trim() ?? '');
  }

  function sortButton(element: HTMLElement, order: 'newest' | 'oldest'): HTMLButtonElement {
    return element.querySelector(`[data-sort-order="${order}"]`) as HTMLButtonElement;
  }

  it('shows the most recent experience first by default', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    expect(renderedPeriods(fixture.nativeElement)).toEqual(EXPERIENCE.map(item => item.period));
  });

  it('shows the earliest experience first after choosing oldest first', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    sortButton(fixture.nativeElement, 'oldest').click();
    fixture.detectChanges();
    expect(renderedPeriods(fixture.nativeElement)).toEqual(EXPERIENCE.map(item => item.period).reverse());
  });

  function renderedTeams(element: HTMLElement): string[] {
    return Array.from(element.querySelectorAll('.team-name')).map(name => name.textContent?.trim() ?? '');
  }

  const allTeams = EXPERIENCE.flatMap(item => item.teams ?? []).map(team => team.name);

  it('shows the current team first by default', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    expect(renderedTeams(fixture.nativeElement)[0]).toBe('AI Infrastructure / Trend AI');
  });

  it('reverses the teams within a job after choosing oldest first', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    sortButton(fixture.nativeElement, 'oldest').click();
    fixture.detectChanges();
    expect(renderedTeams(fixture.nativeElement)).toEqual([...allTeams].reverse());
  });

  it('marks only the selected order as pressed', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    sortButton(fixture.nativeElement, 'oldest').click();
    fixture.detectChanges();
    expect(sortButton(fixture.nativeElement, 'oldest').getAttribute('aria-pressed')).toBe('true');
    expect(sortButton(fixture.nativeElement, 'newest').getAttribute('aria-pressed')).toBe('false');
  });
});
