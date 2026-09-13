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
});
