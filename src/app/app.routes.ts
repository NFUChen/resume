import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: '/skills', pathMatch: 'full' },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent }
];
