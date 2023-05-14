import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  quantity: number = 1;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addItem(this.product, this.quantity);
    this.quantity = 1;
  }
}
