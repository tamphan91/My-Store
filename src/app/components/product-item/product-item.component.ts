import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() addItemEvent = new EventEmitter<CartItem>();
  quantity: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.addItemEvent.emit({product: this.product, quantity: this.quantity});
    this.quantity = 1;
  }
}
