import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartItem, CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] | undefined;
  constructor(private httpService: HttpService, private cartService: CartService) { 

  }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  addItemToCart(cartItem: CartItem){
    this.cartService.addItem(cartItem);
  }

}
