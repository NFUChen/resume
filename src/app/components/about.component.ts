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
                我是陳威霖，一名熱愛軟體開發與技術創新的工程師。最初因碩士研究的需求接觸程式設計，進而發現其在解決問題與數據處理上的強大能力。隨著學習與實戰經驗的累積，我逐漸專注於軟體架構設計、系統開發與雲端技術，並將其應用於各類專案中。
              </p>
              <p class="mb-4">
                在職業生涯中，我不僅培養了紮實的程式開發能力，也在系統設計、後端架構、雲端部署等方面不斷精進。對於技術，我始終保持熱忱，樂於挑戰高效能、高可用性系統的設計與實作。此外，我也關注軟體工程的最佳實踐與新技術的應用，以提升產品品質與開發效率。
              </p>
              <p class="mb-4">
                工作之餘，我熱愛籃球與健身，透過運動保持身心健康，讓自己在技術與創新上持續保持專注與熱情。
              </p>
              
              <h3 class="text-2xl font-bold mb-4 mt-8">專業技能與技術簡介</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>程式語言：Golang、Python、TypeScript</li>
                <li>系統開發：熟悉完整開發流程，具備高效能與穩定系統的設計與實作能力</li>
                <li>設計模式：能依據不同問題場景靈活應用適當的設計模式，以提升程式碼品質</li>
                <li>雲端技術：具備雲端環境部署與管理應用的豐富經驗</li>
                <li>後端 API 設計：專注於高效能 API 設計與開發，確保數據處理與服務穩定</li>
                <li>後端框架：熟悉 Golang （Gin、Fuego）, Python FastAPI</li>
                <li>資料庫技術：擅長 SQL、MongoDB、Redis，並熟悉 ORM 框架與資料庫客戶端開發</li>
                <li>作業系統：精通 Linux 與 Windows 環境，能夠靈活進行開發與部署</li>
                <li>容器化技術：熟悉 Docker、Docker Compose 及 Docker Swarm，實現應用的標準化與可移植性</li>
                <li>自動化部署：熟練使用 Ansible 進行自動化部署，並能透過 GitLab CI 實現自動化測試與交付</li>
                <li>通訊協定：熟悉 MQTT、WebSocket、HTTP 等通訊協定，滿足各類應用需求</li>
                <li>前端技術：具備 React、Angular、TailwindCSS 的開發經驗，能打造良好的使用者體驗</li>
              </ul>
              
              <h3 class="text-2xl font-bold mb-4 mt-8">Kubernetes 與網路技術</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>Kubernetes & k3s：使用 k3s 管理 VM 群集，並透過 Lens 監控</li>
                <li>Web 框架開發：自主開發 PySpring 框架，展示框架層級開發能力與開源精神</li>
                <li>安全通訊：針對地端與雲端架構，使用 WireGuard 建立加密通訊渠道</li>
                <li>Wireguard VPN實作：透過WireGuard建立內網 ，用於 k3s 叢集部建，確保地端與雲端之間（不同雲端服務商）的加密通訊</li>
                <li>基礎架構與 DevOps：具備 Kubernetes 叢集管理經驗，並透過 Lens 進行監控，熟悉 CI/CD 流程，提升開發與部署效率</li>
                <li>微服務架構：設計並開發可擴展的微服務架構，支援高併發與高流量需求</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {} 