import { Component, Input } from '@angular/core';

export interface ProjectFeature {
  text: string;
}

export interface Project {
  title: string;
  period?: string;
  overview: string;
  architecture?: string;
  features?: ProjectFeature[];
  projectName?: string;
  description?: string;
  contributions?: string;
  buttonText: string;
  projectLink?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="card w-full bg-base-200 shadow-xl h-full">
      <div class="card-body overflow-y-auto">
        <h3 class="card-title text-2xl mb-4">{{ project.title }}</h3>
        @if (project.period) {
          <div class="badge badge-primary">{{ project.period }}</div>
        }
        
        <div class="mt-4">
          <h4 class="text-xl font-semibold mb-2">專案概述</h4>
          <p class="mb-4">{{ project.overview }}</p>

          @if (project.architecture) {
            <h4 class="text-xl font-semibold mb-2">後端架構</h4>
            <p class="mb-4">{{ project.architecture }}</p>
          }

          @if (project.features) {
            <h4 class="text-xl font-semibold mb-2">主要功能</h4>
            <ul class="list-disc list-inside space-y-2">
              @for (feature of project.features; track feature.text) {
                <li>{{ feature.text }}</li>
              }
            </ul>
          }

          @if (project.projectName) {
            <h4 class="text-xl font-semibold mb-2">專案名稱</h4>
            <p class="mb-4">{{ project.projectName }}</p>
          }

          @if (project.description) {
            <h4 class="text-xl font-semibold mb-2">專案描述</h4>
            <p class="mb-4">{{ project.description }}</p>
          }

          @if (project.contributions) {
            <h4 class="text-xl font-semibold mb-2">主要功能與貢獻</h4>
            <p class="mb-4">{{ project.contributions }}</p>
          }
        </div>
        @if (project.buttonText.length > 0) {
          <div class="card-actions justify-end mt-auto">
            @if (project.projectLink) {
              <a [href]="project.projectLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary">{{ project.buttonText }}</a>
            } @else {
              <button class="btn btn-primary">{{ project.buttonText }}</button>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
} 