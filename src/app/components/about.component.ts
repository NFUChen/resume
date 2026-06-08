import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-8 text-center">關於我</h2>
      
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col gap-8">
            <div>
              <h3 class="text-2xl font-bold mb-4">自我介紹</h3>
              <p class="mb-4">
                Hi, 我是William，一名熱愛軟體開發與技術創新的工程師。最初因碩士研究的需求接觸程式設計，進而發現其在解決問題與數據處理上的強大能力。隨著學習與實戰經驗的累積，我逐漸專注於軟體架構設計、系統開發與雲端技術，並將其應用於各類專案中。
              </p>
              <p class="mb-4">
                在職業生涯中，我不僅培養了紮實的程式開發能力，也在系統設計、後端架構、雲端部署等方面不斷精進。對於技術，我始終保持熱忱，樂於挑戰高效能、高可用性系統的設計與實作。此外，我也關注軟體工程的最佳實踐與新技術的應用，以提升產品品質與開發效率。
              </p>
              <p class="mb-4">
                工作之餘，我熱愛籃球與健身，透過運動保持身心健康，讓自己在技術與創新上持續保持專注與熱情。
              </p>
              
              <h3 class="text-2xl font-bold mb-4 mt-8">專業技能與技術簡介</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>程式語言：Kotlin、Golang、Python、TypeScript</li>
                <li>後端框架：熟悉 Kotlin （Spring Boot）, Golang （Gin、Fuego）, Python FastAPI</li>
                <li>資料庫技術：擅長 SQL、MongoDB、Redis，並熟悉 ORM 框架與資料庫客戶端開發</li>
                <li>通訊協定：熟悉 MQTT、WebSocket、HTTP 等通訊協定，滿足各類應用需求</li>
                <li>前端技術：具備 React、Angular、TailwindCSS 的開發經驗，能打造良好的使用者體驗</li>
                <li>容器化技術：熟悉 Docker、Docker Compose 及 Docker Swarm，實現應用的標準化與可移植性</li>
                <li>自動化部署：熟練使用 Ansible, Github Actions 進行自動化部署實現持續交付</li>
              </ul>
              
              <h3 class="text-2xl font-bold mb-4 mt-8">Kubernetes 與基礎架構</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>Kubernetes 叢集管理：使用 Kubernetes 管理容器化應用，透過 Lens 監控，熟稔 CI/CD 流程建置與設計</li>
                <li>WireGuard 混合雲通訊：以 WireGuard 建立地端與雲端間的加密內網，支援 Kubernetes 叢集跨雲部署</li>
                <li>微服務架構：設計可擴展的微服務架構，支援高併發與高流量需求</li>
                <li>Web 框架開發：具備框架層級開發能力，自主開發 PySpring 框架，提升團隊開發效率</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {} 