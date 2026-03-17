import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-8 text-center">專業技能</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 1. 程式語言 - 基礎 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">💻</span>
              程式語言
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-primary">Kotlin</div>
              <div class="badge badge-primary">Golang</div>
              <div class="badge badge-primary">Python</div>
              <div class="badge badge-primary">TypeScript</div>
            </div>
          </div>
        </div>

        <!-- 2. 後端 - 第一份工作核心 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">⚙️</span>
              後端
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-accent">Kotlin Spring Boot</div>
              <div class="badge badge-accent">Spring Security</div>
              <div class="badge badge-accent">Golang (Gin, Echo, Fuego)</div>
              <div class="badge badge-accent">Python FastAPI</div>
            </div>
          </div>
        </div>

        <!-- 3. 資料庫 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">💾</span>
              資料庫
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-warning">MongoDB</div>
              <div class="badge badge-warning">PostgreSQL</div>
              <div class="badge badge-warning">MySQL</div>
              <div class="badge badge-warning">Redis</div>
            </div>
          </div>
        </div>

        <!-- 4. 通訊協定 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">🔌</span>
              通訊協定
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-info">HTTP</div>
              <div class="badge badge-info">MQTT for IoT</div>
              <div class="badge badge-info">WebSocket</div>
            </div>
          </div>
        </div>

        <!-- 5. 訊息隊列 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">📨</span>
              訊息隊列
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-primary">RabbitMQ</div>
            </div>
          </div>
        </div>

        <!-- 6. 前端 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">🎨</span>
              前端
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-secondary">TypeScript</div>
              <div class="badge badge-secondary">Angular/React</div>
              <div class="badge badge-secondary">Tailwindcss</div>
            </div>
          </div>
        </div>

        <!-- 7. 雲端與 DevOps - 趨勢經歷 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">☁️</span>
              雲端與 DevOps
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-neutral">AWS</div>
              <div class="badge badge-neutral">Azure</div>
              <div class="badge badge-neutral">Docker</div>
              <div class="badge badge-neutral">Docker Compose</div>
              <div class="badge badge-neutral">Docker Swarm</div>
              <div class="badge badge-neutral">Ansible</div>
              <div class="badge badge-neutral">GitHub Actions</div>
              <div class="badge badge-neutral">Terraform</div>
              <div class="badge badge-neutral">K8s / Helm</div>
              <div class="badge badge-neutral">Talos Linux</div>
              <div class="badge badge-neutral">Traefik</div>
              <div class="badge badge-neutral">WireGuard</div>
            </div>
          </div>
        </div>

        <!-- 8. 其他 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">
              <span class="text-2xl mr-2">🔧</span>
              其他
            </h3>
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-secondary">設計模式 / 系統開發</div>
              <div class="badge badge-secondary">熟稔 Linux 環境開發</div>
              <div class="badge badge-secondary">Git 版本控制</div>
              <div class="badge badge-secondary">依賴注入 / 事件驅動</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class SkillsComponent {} 