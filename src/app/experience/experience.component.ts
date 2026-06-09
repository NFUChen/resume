import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AchievementGroup {
  category: string;
  items: string[];
}

interface TimelineItem {
  period: string;
  title: string;
  role: string;
  summary: string;
  achievements?: string[];
  achievementGroups?: AchievementGroup[];
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
      role: '雲端工程師 / 資安服務業 (5000+ employees)',
      summary: '作為雲端工程師，負責開發和維護企業級資安雲端服務，確保系統可靠性、可維運性與交付效率。',
      achievementGroups: [
        {
          category: '新區域部署與多可用區架構',
          items: [
            '參與泰國 VPN 區網路節點從 staging 到 production 的端到端部署'
          ]
        },
        {
          category: '網路節點故障轉移改善',
          items: [
            '強化網路節點的故障轉移機制，提升跨區域服務連線的穩定性與可用性'
          ]
        },
        {
          category: '產品協定支援與 API 強化',
          items: [
            '參與產品 ICMP（網路連通性檢測）協定支援開發，打通端到端健康檢查流程',
          ]
        },
        {
          category: '跨雲端金鑰輪換',
          items: [
            '設計並實作 multi-cloud（AWS、Azure、Oracle）金鑰輪換腳本與 CI/CD 自動化'
          ]
        },
        {
          category: '資安修補',
          items: ['修補多項 OpenSSH 漏洞，確保內部系統安全性']
        }
      ]
    },
    {
      period: '2022/8 - 2024/8',
      title: 'SRAM 速聯',
      role: '後端工程師 / 機械製造業 (3000+ employees)',
      summary: '參與 MES 系統開發，協助工廠數位化轉型。負責生產資訊看板系統（PDB）前後端開發。',
      achievementGroups: [
        {
          category: '生產資訊看板系統架構設計與開發',
          items: [
            '客戶端層：於產線端點以樹莓派擷取產線狀態與生產數據，透過 MQTT 非同步送出',
            '後端層：Spring Boot、Javalin 框架實作微服務架構',
            '資料庫：PostgreSQL 儲存生產紀錄、MongoDB 儲存設定、Redis 儲存即時狀態與快取',
            'DevOps：Docker Compose 部署後端服務、Ansible 部署產線端點'
          ]
        },
        {
          category: '生產數據即時可視化',
          items: [
            '實作生產數量、目標數量、稼動率與停機時間等核心指標即時可視化系統。',
            '強化跨部門對生產現況的共同視圖，提升現場溝通效率與決策反應速度。'
          ]
        }
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
