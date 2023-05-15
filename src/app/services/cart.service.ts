import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export type CartItem = {
  product: Product;
  quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _item = new BehaviorSubject<CartItem[]>([]);
  readonly items$ = this._item.asObservable();
  constructor() {}

  addItem(cartItem: CartItem) {
    const currentProduct = this._item.value.find(
      (item) => item.product.id === cartItem.product.id
    );
    if (currentProduct) {
      currentProduct.quantity = currentProduct.quantity + cartItem.quantity;
    } else {
      this._item.value.push(cartItem);
    }
    this._item.next(this._item.value);
    alert('Added product');
  }

  updateItem(quantity: number, productId: number) {
    const currentProduct = this._item.value.find(
      (item) => item.product.id === productId
    );
    currentProduct!.quantity = quantity;
    this._item.next(this._item.value);
  }

  removeItem(productId: number): void {
    const filteredItems = this._item.value.filter(
      (item) => item.product.id !== productId
    );
    this._item.next(filteredItems);
    alert('Removed product');
  }

  getItems(): Observable<CartItem[]> {
    return this.items$;
  }
}
