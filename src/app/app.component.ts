import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ChatBubbleComponent } from './chat/chat-bubble.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ChatBubbleComponent],
  template: `
    <app-nav></app-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-chat-bubble></app-chat-bubble>
  `
})
export class AppComponent {
  title = 'William Chen - Portfolio';
}
