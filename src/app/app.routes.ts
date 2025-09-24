import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './components/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent }
];
