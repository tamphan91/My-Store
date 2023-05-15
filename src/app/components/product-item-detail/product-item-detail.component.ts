import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  quantity: number = 1;
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private cartService: CartService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.httpService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(){
    this.cartService.addItem({product: this.product!, quantity: this.quantity});
  }
}
