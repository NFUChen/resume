import { Component } from '@angular/core';
import { ProjectCardComponent, Project } from './project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-8 text-center">專案經歷</h2>
      
      <div class="flex overflow-x-auto gap-6 pb-4">
        @for (project of projects; track project.title) {
          <div class="w-full md:w-[500px] flex-shrink-0 h-[600px]">
            <app-project-card [project]="project" class="h-full overflow-y-auto"></app-project-card>
          </div>
        }
      </div>
    </div>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: '人力資源管理系統',
      period: '企業管理系統專案',
      overview: '全面的人力資源管理系統，專為中小型企業設計，旨在簡化人力資源管理流程',
      features: [
        { text: '員工打卡系統：簡便直觀的打卡界面、實時顯示打卡狀態及記錄' },
        { text: '請假管理：員工請假申請提交、管理員審核流程、多種假別支持' },
        { text: '個人資料管理：員工個人信息查看、資料更新及維護' },
        { text: '薪資管理：薪資設定、計算及核算、薪資單生成與打印' },
        { text: '用戶管理：員工賬戶管理、權限分配與控制' },
        { text: 'LINE 整合：實現 LINE OAuth 串接，提供更便捷的身份驗證，改善使用者體驗' }
      ],
      description: '這是一個採用現代化前後端技術的人力資源管理系統，確保在不同設備上都能提供流暢的用戶體驗。系統主要特點包括：後端採用 Spring Boot 框架，提供穩定可靠的API服務；前端採用 Angular 17、TypeScript、Tailwind CSS 和 DaisyUI；高度模組化的代碼結構，便於維護和擴展；直觀的界面設計，清晰的視覺反饋；完整支持繁體中文界面。系統優勢在於提高效率、確保數據一致性、提高管理透明度、準確計算工作時間和薪資、易於使用以及安全可靠的權限控制。',
      projectLink: 'https://hr-ext.devcloudhub.org/clocking',
      buttonText: '查看系統'
    },
    {
      title: '敏感詞替換工具',
      period: '內容審核工具專案',
      overview: '專為文案審核設計的文字替換系統，能夠幫助內容創作者、編輯和行銷團隊自動檢測並替換文案中的敏感詞彙、不當用語或特定法律用語，確保內容合規且專業',
      features: [
        { text: '智能文案校正：一鍵檢測文案中的敏感詞彙和不當用語' },
        { text: '即時替換建議：系統自動提供適當的替代詞彙選項' },
        { text: '敏感詞詞庫管理：便捷的介面用於添加、編輯和刪除敏感詞彙' },
        { text: '版本控制：支援編輯操作的撤銷與重做功能' },
        { text: '快速複製：一鍵複製校正後的文案' }
      ],
      description: '這是一款提升內容創作效率並降低合規風險的文案優化工具。前端採用 Next.js 框架，提供流暢的用戶體驗和響應式設計；後端使用 Spring Boot (Kotlin) 開發，確保高效穩定的服務。系統採用容器化部署 (Docker)，便於快速部署和擴展。完善的用戶權限管理系統支援管理員和一般用戶角色。適用於社群媒體文案審核、行銷內容合規檢查、法律文件敏感詞檢測、內容創作者自我審查以及企業內部文件規範化等多種場景。',
      buttonText: '查看工具',
      projectLink: 'https://word.cozydevs.com/login?redirect=/auth'
    },
    {
      title: 'PySpring Framework',
      period: '個人開源專案',
      overview: '我自行開發的一個開源 Python Web 框架，靈感來自 Spring Boot，展示了我對框架設計和開發的熱情和技術能力',
      features: [
        { text: '自動依賴注入（Auto Dependency Injection）' },
        { text: '自動配置管理（Auto Configuration Management）' },
        { text: 'ASGI Web 服務器用於託管應用程序' },
        { text: '基於組件的架構，組件可重用且模塊化' },
        { text: '屬性管理，提供便捷的應用程序配置管理方式' },
        { text: '框架模塊擴展功能' },
        { text: 'FastAPI 集成，用於路由、請求處理和服務器配置' },
        { text: '自動生成 OpenAPI 文檔' },
        { text: '基於 Python 型別提示的類型安全依賴注入' }
      ],
      description: '這是我個人主導的開源項目，雖然規模不大，但展示了我對開源社區的貢獻精神和框架層級開發的技術能力。PySpring 結合了 FastAPI（Web 服務器層）和 Pydantic（數據驗證）等技術，為構建現代化、可擴展的應用程序提供結構化的開發體驗。通過這個專案，我深入理解了框架設計原則、依賴注入模式和meta programming 技術。',
      projectLink: 'https://github.com/PythonSpring/pyspring-core/tree/main/py_spring_core/core',
      buttonText: '查看專案'
    },
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
      projectLink: 'https://chat.cozydevs.com/',
      buttonText: '查看詳情'
    },
    {
      title: '基因演算法解決車輛路徑問題',
      period: '2022/1 - 2022/6',
      overview: '使用基因演算法（以 Python 實現）解決具有時間窗限制的車輛路徑問題',
      projectLink: 'https://github.com/NFUChen/Genetic-Algorithm-Solving-Vehicle-Routing-Problem',
      buttonText: '前往查看'
    },
    {
      title: '智能土壤監測與管理系統',
      period: 'IoT智能農業專案',
      overview: '結合硬體感測器與軟體平台的完整解決方案，專為農業、園藝愛好者和專業種植者設計，實現智能化土壤監測與管理',
      features: [
        { text: '即時監測：持續追蹤並顯示土壤濕度、溫度和環境資料' },
        { text: '智能灌溉：基於預設門檻值自動控制灌溉系統' },
        { text: '異常警報：當環境參數超出安全範圍時發送警報通知' },
        { text: '資料視覺化：提供歷史數據圖表，協助分析趨勢和優化管理策略' },
        { text: '電子郵件通知：透過Gmail服務發送重要事件和警報通知' },
        { text: '使用者友善界面：直觀的控制面板，適合各種技術水平的使用者' }
      ],
      description: '這是一個結合IoT技術與現代網頁應用的智能解決方案。前端採用Svelte框架與SvelteKit構建，使用TypeScript確保代碼品質，並整合Tailwind CSS與Flowbite組件庫；後端基於Python與Flask框架開發RESTful API，採用模組化設計包含監測服務、水分補充服務和通知服務。系統支援DHT11溫濕度感測器及ADS1115類比數位轉換器，使用Raspberry Pi GPIO控制灌溉系統。技術優勢包括模組化架構設計、支援容器化部署、低資源消耗。',
      buttonText: '查看詳情',
      projectLink: "https://github.com/NFUChen/Soil-Monitoring"
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
} 