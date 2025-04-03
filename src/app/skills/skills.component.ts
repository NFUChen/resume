import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  items: string[];
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      category: 'Frontend Development',
      items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'DaisyUI'],
      icon: '💻'
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express', 'Python', 'Java', 'Spring Boot', 'RESTful APIs'],
      icon: '⚙️'
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
      icon: '🗄️'
    },
    {
      category: 'DevOps & Tools',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jenkins', 'Jira'],
      icon: '🛠️'
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Technical Documentation'],
      icon: '🤝'
    }
  ];
} 