import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthRoutingModule } from "./auth/auth-routing-module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthRoutingModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend_angular_proyecto');
}
