import { TestBed } from '@angular/core/testing';
import { ResumeTextComponent } from './resume-text.component';

 describe('ResumeTextComponent', () => {
  it('escapes text, emphasis and tooltip labels without inserting HTML', () => {
    const fixture = TestBed.createComponent(ResumeTextComponent);
    fixture.componentRef.setInput('text', '<img src=x> **<b>70%</b>** [[<script>PoP</script>|point of presence]]');
    fixture.componentRef.setInput('glossary', [{ term: 'point of presence', definition: '<img src=x> endpoint' }]);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('img, b, script')).toBeNull();
    expect(element.querySelector('strong')?.textContent).toBe('<b>70%</b>');
    expect(element.textContent).toContain('<img src=x> <b>70%</b>');
    expect(element.querySelector('.glossary-term')?.textContent?.trim()).toBe('<script>PoP</script>');
    expect(element.querySelector('.tooltip')?.getAttribute('data-tip')).toBe('<img src=x> endpoint');
  });

  it('updates parsed content when inputs change', () => {
    const fixture = TestBed.createComponent(ResumeTextComponent);
    fixture.componentRef.setInput('text', '**first**');
    fixture.detectChanges();
    fixture.componentRef.setInput('text', 'second');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('second');
    expect(fixture.nativeElement.querySelector('strong')).toBeNull();
  });
});
