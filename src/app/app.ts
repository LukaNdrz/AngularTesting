import { Component, signal } from '@angular/core';
import { CartComponent } from './cart-component/cart-component';

@Component({
  selector: 'app-root',
  imports: [CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test');
}