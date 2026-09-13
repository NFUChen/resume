import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCE, ExperienceItem } from '../data/resume.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  timeline: ExperienceItem[] = EXPERIENCE;
}
