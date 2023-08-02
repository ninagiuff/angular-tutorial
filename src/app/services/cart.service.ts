import { Product } from '../products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carrello: Product[] = []; //import interfaccia e creiamo un array vuoto in cui memorizzare i prod del carrello
  total=0;
  constructor(private http: HttpClient) {}


  addToCart(product: Product) {
    this.carrello.push(product);
    // this.getQuantity();
  }

  // getQuantity() {
  //   return this.carrello.length;
  // }

  getItems(){
    return this.carrello;
  }

  clearCart() {
    this.carrello = [];
    return this.carrello;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }


}
