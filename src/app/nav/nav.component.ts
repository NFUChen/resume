import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeTogglerComponent } from '../components/theme-toggler.component';

interface NavItem {
  label: string;
  page: string;
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
    { label: '關於我', page: 'about', icon: '👨‍💻' },
    { label: '經歷', page: 'experience', icon: '🧭' },
    { label: '專案', page: 'projects', icon: '🚀' },
    { label: '技能', page: 'skills', icon: '💻' },
    
  ];
} 