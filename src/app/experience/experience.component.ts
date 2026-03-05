import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  period: string;
  title: string;
  role: string;
  summary: string;
  achievements?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  timeline: TimelineItem[] = [
    {
      period: '2024/9 - Present',
      title: '趨勢科技 Trend Micro',
      role: '後端工程師 / 資安服務業 (5000+ employees)',
      summary: '作為雲端工程師，負責開發和維護企業級資安雲端服務，確保系統可靠性、可維運性與交付效率。',
      achievements: [
        '在內網連線受限、外部 CI 無法直連資料庫的條件下，主導 Atlas 導入評估並定義可落地的 schema 管理策略。',
        '將資料庫變更流程標準化為可計畫、可套用、可回滾、可檢視的作業模式，提升跨團隊協作與交付穩定性。',
        '推動以 Terraform 與 Kubernetes Job 串接的執行流程，降低人工操作風險，並強化變更追蹤與治理能力。'
      ]
    },
    {
      period: '2022/8 - 2024/8',
      title: 'SRAM',
      role: '後端工程師 / 機械製造業 (3000+ employees)',
      summary: '參與 MES 系統開發，協助工廠數位化轉型，提升生產效率與可視化管理。',
      achievements: [
        '參與工廠生產資訊看板（RTIF）開發，提供管理團隊即時掌握產線關鍵數據。',
        '實作生產數量、目標數量、稼動率與停機時間等核心指標的即時可視化。',
        '強化跨部門對生產現況的共同視圖，提升現場溝通效率與決策反應速度。'
      ]
    },
    {
      period: '2020/9 - 2022/6',
      title: '國立虎尾科技大學',
      role: '工業工程管理研究所 碩士',
      summary: '建立紮實的工程管理學術基礎，培養系統性思考與問題解決能力。'
    }
  ];
}
