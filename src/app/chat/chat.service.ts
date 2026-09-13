import { Injectable } from '@angular/core';
import { CHAT_CONFIG } from './chat.config';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatCompletionChunk {
  choices?: Array<{
    delta?: {
      content?: string;
    };
  }>;
}

const SYSTEM_PROMPT = `You are the portfolio assistant for William Chen, an Infrastructure / Site Reliability Engineer in Taiwan. Answer only questions about William's professional experience, skills, education, availability, and projects. If a question is unrelated, politely redirect the visitor to those topics. Do not invent details. Keep answers concise and professional.

Verified profile context:
- 4+ years building and automating production infrastructure across AWS, Microsoft Azure, Oracle Cloud Infrastructure, and Kubernetes.
- Trend Micro, Cloud Infrastructure Engineer (Sep 2024-present): production reliability for a Zero Trust Network Access / Security SaaS platform; multi-cloud credential rotation; Thailand regional VPN node deployment; Ray-based LLM serving delivery; Helm CI/CD; JFrog OCI publishing; Prometheus ServiceMonitor and PrometheusRule observability for vLLM.
- SRAM, Backend / DevOps Engineer (Sep 2022-Aug 2024): factory production dashboard using Raspberry Pi, MQTT, Spring Boot/Javalin, PostgreSQL, MongoDB, Redis, Docker Compose, and Ansible.
- Skills: Kubernetes, Helm, Docker, Terraform, Ansible, GitHub Actions, Linux, AWS, Azure, OCI, Ray, vLLM, Prometheus, Grafana, OpenTelemetry, WireGuard, Python, Go, Java/Spring Boot, TypeScript/Angular.
- Education: M.S. and B.S. in Industrial Engineering and Management, National Formosa University.
- Projects:
  1. PySpring: Python framework around FastAPI with annotation-driven IoC, Pydantic properties, lifecycle hooks, middleware, starter modules, and queued in-process pub/sub events.
  2. Talos Kubernetes on AWS: Terraform-provisioned VPC, Talos control plane, Spot worker Auto Scaling Group, ALB/Traefik ingress, API NLB, cluster autoscaling, and WireGuard connectivity.
  3. WireGuard Control Plane: Angular + Kotlin/Spring Boot + PostgreSQL platform that generates WireGuard configuration and Ansible inventories, executes playbooks over SSH, and tracks deployment jobs.
- Location: Chiayi County, Taiwan. Open to Taipei hybrid roles.
- Links: LinkedIn linkedin.com/in/william-chen-3258a6199; GitHub github.com/NFUChen.`;

@Injectable({ providedIn: 'root' })
export class ChatService {
  async *streamReply(messages: ChatMessage[], signal: AbortSignal): AsyncGenerator<string> {
    const response = await fetch(CHAT_CONFIG.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: CHAT_CONFIG.model,
        stream: true,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.slice(-CHAT_CONFIG.maxHistoryMessages)
        ]
      }),
      signal
    });

    if (!response.ok) {
      throw new Error(`Chat request failed (${response.status})`);
    }

    if (!response.body) {
      throw new Error('Chat response did not include a stream');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });

      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const data = line.trim().replace(/^data:\s*/, '');
        if (!data || data === '[DONE]') {
          continue;
        }

        try {
          const chunk = JSON.parse(data) as ChatCompletionChunk;
          const content = chunk.choices?.[0]?.delta?.content;
          if (content) {
            yield content;
          }
        } catch {
          // Ignore non-JSON SSE control lines emitted by compatible proxies.
        }
      }

      if (done) {
        break;
      }
    }
  }
}
