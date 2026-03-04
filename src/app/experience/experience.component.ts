import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  period: string;
  title: string;
  role: string;
  summary: string;
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
      role: '後端工程師 / 資安服務業 (500+ employees)',
      summary: '作為雲端工程師，負責開發和維護企業的資安雲端服務，確保系統的可靠性和效能。'
    },
    {
      period: '2022/8 - 2024/8',
      title: 'SRAM',
      role: '後端工程師 / 機械製造業 (500+ employees)',
      summary: '參與 MES 系統開發，協助工廠數位化轉型，提升生產效率與可視化管理。'
    },
    {
      period: '2020/9 - 2022/6',
      title: '國立虎尾科技大學',
      role: '工業工程管理研究所 碩士',
      summary: '建立紮實的工程管理學術基礎，培養系統性思考與問題解決能力。'
    }
  ];
}
