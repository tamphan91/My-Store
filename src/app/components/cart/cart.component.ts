import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem, CartService } from 'src/app/services/cart.service';

type CustomerInformation = {
  fullName: string,
  address: string,
  creditCardNumber: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items$: Observable<CartItem[]> | undefined;
  totalAmount$: Observable<number> | undefined;
  totalAmount: number = 0;
  custInfor: CustomerInformation = {fullName: '', address: '', creditCardNumber: ''};
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items$ = this.cartService.getItems();
    this.totalAmount$ = this.items$.pipe(
      map(item => item.reduce((acc, item) =>{
        return acc + item.product.price * item.quantity;
      }, 0)),
    )
    this.totalAmount$.subscribe(data => {
      this.totalAmount = data;
    })
  }

  removeItem(productId: number){
    this.cartService.removeItem(productId);
  }

  updateItem(event: any, productId: number){
    this.cartService.updateItem(event.target.value, productId)
  }

  onSubmit(){
    console.log('custInfor', this.custInfor);
    this.router.navigate(['/confirmation'],  { queryParams: {fullName: this.custInfor.fullName, totalAmount: this.totalAmount} });
  }
}
