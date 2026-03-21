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
      role: '後端工程師 / 資安服務業 (5000+ employees)',
      summary: '作為雲端工程師，負責開發和維護企業級資安雲端服務，確保系統可靠性、可維運性與交付效率。',
      achievementGroups: [
        {
          category: '資料庫 Schema 變更管理',
          items: [
            '在內網連線受限、外部 CI 無法直連的條件下，主導 schema 版本管理導入評估',
            '將變更流程標準化為可計畫、可套用、可回滾、可檢視的作業模式',
            '以 Terraform 與 Kubernetes Job 串接執行流程，強化變更可追溯性'
          ]
        },
        {
          category: '跨雲端金鑰輪換',
          items: [
            '設計並實作 multi-cloud（AWS、Azure、Oracle）金鑰輪換腳本與 CI/CD 自動化',
            '將工具打包為 standalone executable 以簡化佈署'
          ]
        },
        {
          category: '資安修補',
          items: ['修補多項 OpenSSH 漏洞，含停用不安全的 cipher 模式']
        },
        {
          category: '新區域部署與多可用區架構',
          items: [
            '參與泰國區從 staging 到 production 的端到端部署',
            '含多可用區設定、負載均衡與監控告警串接'
          ]
        },
        {
          category: '產品協定支援與 API 強化',
          items: [
            '參與產品 ICMP（網路連通性檢測）協定支援開發，打通端到端健康檢查流程',
            '參與雲端資料庫連線與錯誤處理改善，提升 API 穩定性與可測試性'
          ]
        },
        {
          category: '內部工具鏈建置',
          items: [
            '從零建立 SQL 語法檢查工具，串接 Docker、CI 與雲端儲存',
            '完成跨雲 container registry 的映像發布自動化'
          ]
        }
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
