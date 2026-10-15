import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';
import { PricePipe } from '../price-pipe';

@Component({
  selector: 'app-cart-component',
  imports: [PricePipe],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {
  public svc = inject(CartService);
}