import { Component, ElementRef, HostListener, OnDestroy, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatMessage, ChatService } from './chat.service';
import { MarkdownPipe } from './markdown.pipe';
import { TraditionalChineseService } from './traditional-chinese.service';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [FormsModule, MarkdownPipe],
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnDestroy {
  private static readonly STREAM_FRAME_MS = 4;
  private readonly chatService = inject(ChatService);
  private readonly traditionalChinese = inject(TraditionalChineseService);
  private abortController?: AbortController;
  private closeTimer?: ReturnType<typeof setTimeout>;
  private isComposing = false;

  @ViewChild('messageInput') messageInput?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('messageList') messageList?: ElementRef<HTMLDivElement>;

  isOpen = false;
  isPanelRendered = false;
  isClosing = false;
  isZen = false;
  isLoading = false;
  input = '';
  errorMessage = '';
  messages: ChatMessage[] = [
    {
      role: 'assistant',
      content: "Hi, I'm William's portfolio assistant. Ask me about his infrastructure experience, skills, or projects."
    }
  ];

  toggle(): void {
    if (this.isOpen) {
      this.close();
      return;
    }

    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }

    this.isOpen = true;
    this.isClosing = false;
    this.isPanelRendered = true;
    setTimeout(() => this.messageInput?.nativeElement.focus());
  }

  toggleZen(): void {
    this.isZen = !this.isZen;
    setTimeout(() => this.messageInput?.nativeElement.focus());
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.isZen) {
      this.isZen = false;
    }
  }

  private close(): void {
    this.isOpen = false;
    this.isZen = false;
    this.isClosing = true;
    this.closeTimer = setTimeout(() => {
      this.isPanelRendered = false;
      this.isClosing = false;
      this.closeTimer = undefined;
    }, 220);
  }

  handleCompositionStart(): void {
    this.isComposing = true;
  }

  handleCompositionEnd(): void {
    this.isComposing = false;
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Enter' || event.shiftKey) {
      return;
    }

    // Enter confirms the active IME candidate (for example, Zhuyin input).
    // keyCode 229 is retained as a fallback for browsers with incomplete
    // KeyboardEvent.isComposing support.
    if (this.isComposing || event.isComposing || event.keyCode === 229) {
      return;
    }

    event.preventDefault();
    void this.sendMessage();
  }

  async sendMessage(): Promise<void> {
    const content = this.input.trim();
    if (!content || this.isLoading) {
      return;
    }

    this.errorMessage = '';
    this.input = '';
    this.messages.push({ role: 'user', content });
    const assistantMessage: ChatMessage = { role: 'assistant', content: '' };
    const convertToTraditional = this.traditionalChinese.shouldConvertReply(content);
    const conversionReady = convertToTraditional
      ? this.traditionalChinese.prepare()
      : Promise.resolve();
    let rawAssistantContent = '';
    this.messages.push(assistantMessage);
    this.isLoading = true;
    this.abortController = new AbortController();
    this.scrollToBottom();

    try {
      const history = this.messages.slice(0, -1);
      for await (const chunk of this.chatService.streamReply(history, this.abortController.signal)) {
        await conversionReady;
        for (const character of chunk) {
          rawAssistantContent += character;
          assistantMessage.content = convertToTraditional
            ? this.traditionalChinese.convert(rawAssistantContent)
            : rawAssistantContent;
          this.scrollToBottom(false);
          await this.waitForStreamFrame(this.abortController.signal);
        }
      }

      if (!assistantMessage.content) {
        assistantMessage.content = 'No response was returned. Please try again.';
      }
    } catch (error) {
      this.messages.pop();
      this.errorMessage = error instanceof Error ? error.message : 'Unable to reach the chat service.';
    } finally {
      this.isLoading = false;
      this.abortController = undefined;
      this.scrollToBottom();
    }
  }

  ngOnDestroy(): void {
    this.abortController?.abort();
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
  }

  private waitForStreamFrame(signal: AbortSignal): Promise<void> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, ChatBubbleComponent.STREAM_FRAME_MS);
      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(signal.reason);
      }, { once: true });
    });
  }

  private scrollToBottom(smooth = true): void {
    requestAnimationFrame(() => {
      const element = this.messageList?.nativeElement;
      element?.scrollTo({
        top: element.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto'
      });
    });
  }
}
