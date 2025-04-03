import { Component } from '@angular/core';
import { ProjectCardComponent, Project } from './project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-8 text-center">專案經歷</h2>
      
      <div class="carousel w-full relative">
        @for (project of projects; track project.title; let i = $index) {
          <div class="w-full" [style.display]="currentSlide === i ? 'block' : 'none'">
            <app-project-card [project]="project"></app-project-card>
          </div>
        }
      </div>

      <!-- Carousel navigation -->
      <div class="flex justify-center w-full py-2 gap-2 mt-4">
        @for (project of projects; track project.title; let i = $index) {
          <button 
            class="btn btn-xs" 
            [class.btn-active]="currentSlide === i"
            (click)="currentSlide = i"
          >
            {{ i + 1 }}
          </button>
        }
      </div>
    </div>
  `
})
export class ProjectsComponent {
  currentSlide = 0;

  projects: Project[] = [
    {
      title: 'Chat Room GPT',
      period: '2023/4 - 仍在進行',
      overview: '一個全方位的聊天平台，提供多樣化的功能與特性',
      architecture: '微服務架構',
      features: [
        { text: '會員系統與個人帳戶管理' },
        { text: '建立、加入和管理聊天室' },
        { text: '與 AI 助手進行即時無縫的文字對話' },
        { text: 'AI 提供一般性及領域知識的回應' },
        { text: '靈活的聊天室權限和 AI 助手互動規則' },
        { text: '即開即用的 SaaS 解決方案，無需複雜部署或安裝' }
      ],
      buttonText: '查看詳情'
    },
    {
      title: '基因演算法解決車輛路徑問題',
      period: '2022/1 - 2022/6',
      overview: '使用基因演算法（以 Python 實現）解決具有時間窗限制的車輛路徑問題',
      buttonText: '前往查看'
    },
    {
      title: '工廠生產資訊看板',
      period: '2022/10 - 仍在進行',
      overview: '即時資訊流（RTIF）- 生產資訊看板',
      projectName: '即時資訊流（RTIF）- 生產資訊看板',
      description: '在 SRAM 期間，我有幸參與了即時資訊流（RTIF）項目的開發和實施。RTIF 類似於微型製造執行系統（micro-MES），是一個全面的計劃，旨在通過提升我們的製造運營效率。生產資訊看板是這個綜合系統的關鍵組件，在為管理團隊提供重要信息方面發揮著重要作用。',
      contributions: '生產資訊看板作為 RTIF 生態系統的一部分，持續展示關鍵生產指標。它提供即時訪問關鍵績效指標，如實際產出、目標產出、運行比率和停機時間，確保我們的管理團隊能夠及時掌握信息並做出靈活決策。',
      buttonText: '查看詳情'
    }
  ];

  navigate(index: number) {
    this.currentSlide = (index + this.projects.length) % this.projects.length;
  }
} 