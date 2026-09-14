import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursorSpotlightDirective } from '../components/cursor-spotlight.directive';
import { EXPERIENCE, ExperienceItem } from '../data/resume.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CursorSpotlightDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  timeline: ExperienceItem[] = EXPERIENCE;
}
