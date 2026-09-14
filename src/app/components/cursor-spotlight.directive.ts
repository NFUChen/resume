import { Directive, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCursorSpotlight]',
  standalone: true
})
export class CursorSpotlightDirective implements OnInit, OnDestroy {
  private cleanupListeners: (() => void)[] = [];
  private animationFrameId: number | null = null;
  private latestPointerEvent: PointerEvent | null = null;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const host = this.elementRef.nativeElement;

    const canTrack = (): boolean => precisePointer.matches && !reducedMotion.matches;
    const hideSpotlight = (): void => host.style.setProperty('--spotlight-opacity', '0');

    const handlePointerMove = (event: PointerEvent): void => {
      if (!canTrack() || !event.isPrimary || event.pointerType === 'touch') {
        hideSpotlight();
        return;
      }

      this.latestPointerEvent = event;
      if (this.animationFrameId !== null) {
        return;
      }

      this.animationFrameId = window.requestAnimationFrame(() => {
        const pointerEvent = this.latestPointerEvent;
        this.animationFrameId = null;

        if (!pointerEvent) {
          return;
        }

        const bounds = host.getBoundingClientRect();
        host.style.setProperty('--cursor-x', `${pointerEvent.clientX - bounds.left}px`);
        host.style.setProperty('--cursor-y', `${pointerEvent.clientY - bounds.top}px`);
        host.style.setProperty('--spotlight-opacity', '1');
      });
    };

    const handlePreferenceChange = (): void => hideSpotlight();

    this.ngZone.runOutsideAngular(() => {
      host.addEventListener('pointermove', handlePointerMove, { passive: true });
      host.addEventListener('pointerleave', hideSpotlight, { passive: true });
      precisePointer.addEventListener('change', handlePreferenceChange);
      reducedMotion.addEventListener('change', handlePreferenceChange);
    });

    this.cleanupListeners = [
      () => host.removeEventListener('pointermove', handlePointerMove),
      () => host.removeEventListener('pointerleave', hideSpotlight),
      () => precisePointer.removeEventListener('change', handlePreferenceChange),
      () => reducedMotion.removeEventListener('change', handlePreferenceChange)
    ];
  }

  ngOnDestroy(): void {
    this.cleanupListeners.forEach(cleanup => cleanup());

    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}
