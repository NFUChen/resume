import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with Angular and DaisyUI. Features a clean design and showcases my skills and projects.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'DaisyUI'],
      imageUrl: 'https://picsum.photos/800/400',
      githubUrl: 'https://github.com/yourusername/personal-portfolio',
      liveUrl: 'https://your-portfolio.com'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and shopping cart functionality.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      imageUrl: 'https://picsum.photos/800/401',
      githubUrl: 'https://github.com/yourusername/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      imageUrl: 'https://picsum.photos/800/402',
      liveUrl: 'https://task-manager-demo.com'
    }
  ];
} 