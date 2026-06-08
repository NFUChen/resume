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
                我是 William，專注於後端開發、系統架構與雲端基礎架構的軟體工程師，具備從需求分析、架構設計、開發實作到部署維運的完整經驗。
              </p>
              <p class="mb-4">
                擅長以 Kotlin / Spring Boot、Python、Golang 開發高可用的後端服務，並以 Kubernetes、Terraform、Ansible 等工具建置可重現的雲端基礎架構。在過往專案中負責過微服務拆分、跨雲部署、CI/CD 流程設計與框架層工具開發。
              </p>

              <h3 class="text-2xl font-bold mb-4 mt-8">專業技能與技術簡介</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>程式語言：Kotlin、Golang、Python、TypeScript</li>
                <li>後端框架：熟悉 Kotlin （Spring Boot）, Golang （Gin、Fuego）, Python FastAPI</li>
                <li>資料庫技術：擅長 SQL、MongoDB、Redis，並熟悉 ORM 框架與資料庫客戶端開發</li>
                <li>通訊協定：熟悉 MQTT、WebSocket、HTTP 等通訊協定，滿足各類應用需求</li>
                <li>前端技術：具備 React、Angular、TailwindCSS 的開發經驗，能打造良好的使用者體驗</li>
                <li>容器化與叢集管理：熟悉 Docker、Docker Compose 及 Kubernetes，並透過 Lens 進行叢集監控</li>
                <li>基礎架構即程式碼（IaC）：以 Terraform 管理基礎設施資源</li>
                <li>自動化部署：熟練使用 Ansible, Github Actions 進行自動化部署實現持續交付</li>
                <li>混合雲網路：以 WireGuard 建立地端與雲端間的加密內網，支援 Kubernetes 叢集跨雲部署</li>
                <li>系統架構：設計可擴展的微服務架構，支援高併發與高流量需求</li>
                <li>框架層開發：自主開發 PySpring 框架，提升團隊開發效率</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {} 