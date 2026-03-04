import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeTogglerComponent } from '../components/theme-toggler.component';

interface NavItem {
  label: string;
  path: string;
  icon: string;
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
    { label: '關於我', path: '/about', icon: '👨‍💻' },
    { label: '經歷', path: '/experience', icon: '🧭' },
    { label: '技能', path: '/skills', icon: '💻' },
    { label: '專案', path: '/projects', icon: '🚀' }
  ];
} 