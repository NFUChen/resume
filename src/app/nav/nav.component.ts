import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeTogglerComponent } from '../components/theme-toggler.component';

interface NavItem {
  label: string;
  page: string;
  /** Inline SVG path data rendered inside a 24x24 stroked viewBox. */
  iconPath: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ThemeTogglerComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navItems: NavItem[] = [
    {
      label: 'About',
      page: 'about',
      iconPath: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    },
    {
      label: 'Experience',
      page: 'experience',
      iconPath: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20'
    },
    {
      label: 'Projects',
      page: 'projects',
      iconPath: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.3 7l8.7 5 8.7-5M12 22V12'
    },
    {
      label: 'Skills',
      page: 'skills',
      iconPath: 'm16 18 6-6-6-6M8 6l-6 6 6 6'
    }
  ];
} 