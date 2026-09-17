import { TestBed } from '@angular/core/testing';
import { ChatBubbleComponent } from './chat-bubble.component';
import { ChatService } from './chat.service';

describe('ChatBubbleComponent', () => {
  let component: ChatBubbleComponent;
  let streamReply: jasmine.Spy;

  beforeEach(() => {
    streamReply = jasmine.createSpy('streamReply').and.callFake(async function* () {
      yield 'Response';
    });

    TestBed.configureTestingModule({
      imports: [ChatBubbleComponent],
      providers: [{ provide: ChatService, useValue: { streamReply } }]
    });

    component = TestBed.createComponent(ChatBubbleComponent).componentInstance;
    component.input = '測試問題';
  });

  it('toggles zen mode', () => {
    component.toggleZen();

    expect(component.isZen).toBeTrue();

    component.toggleZen();

    expect(component.isZen).toBeFalse();
  });

  it('exits zen mode when Escape is pressed', () => {
    component.isZen = true;

    component.handleEscape();

    expect(component.isZen).toBeFalse();
  });

  it('resets zen mode when chat closes', () => {
    component.toggle();
    component.isZen = true;

    component.toggle();

    expect(component.isZen).toBeFalse();
  });

  it('submits when Enter is pressed outside IME composition', () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Enter',
      cancelable: true
    });

    component.handleKeydown(event);

    expect(event.defaultPrevented).toBeTrue();
    expect(streamReply).toHaveBeenCalled();
  });

  it('does not submit when Enter confirms an IME candidate', () => {
    component.handleCompositionStart();
    const event = new KeyboardEvent('keydown', {
      key: 'Enter',
      cancelable: true
    });

    component.handleKeydown(event);

    expect(event.defaultPrevented).toBeFalse();
    expect(streamReply).not.toHaveBeenCalled();
    expect(component.input).toBe('測試問題');
  });

  it('allows Enter submission after composition ends', () => {
    component.handleCompositionStart();
    component.handleCompositionEnd();
    const event = new KeyboardEvent('keydown', {
      key: 'Enter',
      cancelable: true
    });

    component.handleKeydown(event);

    expect(event.defaultPrevented).toBeTrue();
    expect(streamReply).toHaveBeenCalled();
  });

  it('renders streamed chunks one character at a time', async () => {
    const streamedContents: string[] = [];
    streamReply.and.callFake(async function* () {
      yield 'ABC';
    });
    spyOn(component as unknown as { scrollToBottom: () => void }, 'scrollToBottom').and.callFake(() => {
      const assistantMessage = component.messages.at(-1);
      if (assistantMessage?.role === 'assistant') {
        streamedContents.push(assistantMessage.content);
      }
    });

    await component.sendMessage();

    expect(streamedContents).toEqual(['', 'A', 'AB', 'ABC', 'ABC']);
  });
});
