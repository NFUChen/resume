import { Injectable } from '@angular/core';
import { CORE_SKILLS, EXPERIENCE, PROFILE, PROJECTS } from '../data/resume.data';
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

function buildResumeContext(): string {
  const skills = Object.entries(CORE_SKILLS)
    .map(([category, items]) => `- ${category}: ${items.join(', ')}`)
    .join('\n');

  const experience = EXPERIENCE
    .map(item => {
      const achievements = item.achievementGroups
        ?.flatMap(group => group.items.map(detail => `  - ${group.category}: ${detail}`))
        .join('\n');
      return `- ${item.title} | ${item.role} | ${item.period}\n  Summary: ${item.summary}${achievements ? `\n${achievements}` : ''}`;
    })
    .join('\n');

  const projects = PROJECTS
    .map(project => [
      `- ${project.title}${project.period ? ` | ${project.period}` : ''}`,
      `  Summary: ${project.description ?? project.overview ?? ''}`,
      project.architecture ? `  Architecture: ${project.architecture}` : '',
      project.features?.map(feature => `  - ${feature}`).join('\n') ?? '',
      project.technologies?.length ? `  Technologies: ${project.technologies.join(', ')}` : '',
      project.githubUrl ? `  GitHub: ${project.githubUrl}` : '',
      project.projectLink ? `  Documentation: ${project.projectLink}` : ''
    ].filter(Boolean).join('\n'))
    .join('\n');

  return `You are the portfolio assistant for ${PROFILE.name}, a ${PROFILE.headline} based in ${PROFILE.location}.

Your role:
- Answer questions only about William's professional experience, engineering skills, education, availability, and projects.
- Use only the verified context below. Never invent employers, metrics, responsibilities, technologies, dates, certifications, or project capabilities.
- Distinguish production work from personal/open-source projects.
- When discussing architecture, explain the engineering decisions and component relationships represented in the context without claiming unlisted scale or outcomes.
- If information is not present, say that it is not specified and suggest contacting William through LinkedIn.
- If a question is unrelated to William's portfolio, politely redirect to his experience, skills, or projects.
- Keep answers concise and professional. Use Markdown lists or short sections when that improves readability.
- Reply in the language used by the visitor.

PROFILE
Name: ${PROFILE.name}
Headline: ${PROFILE.headline}
Focus: ${PROFILE.focus.join(', ')}
Location: ${PROFILE.location}
Availability: ${PROFILE.availability}
Professional summary: ${PROFILE.summary}
LinkedIn: ${PROFILE.linkedin}
GitHub: ${PROFILE.github}

CORE SKILLS
${skills}

EXPERIENCE AND EDUCATION
${experience}

PROJECTS
${projects}`;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  async *streamReply(messages: ChatMessage[], signal: AbortSignal): AsyncGenerator<string> {
    const response = await fetch(CHAT_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CHAT_CONFIG.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: CHAT_CONFIG.model,
        stream: true,
        messages: [
          { role: 'system', content: buildResumeContext() },
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
