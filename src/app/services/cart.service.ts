import { Product } from '../products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carrello: Product[] = []; //import interfaccia e creiamo un array vuoto in cui memorizzare i prod del carrello
  itemsChanged = new Subject<number>();
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.carrello.push(product);
    this.itemsChanged.next(this.carrello.length);

  }
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

  deleteProduct(product: any): void {
    const index = this.carrello.indexOf(product); // Ottengo l'indice del prodotto nell'array
    if (index !== -1) {
      this.carrello.splice(index, 1); // Rimuovo il prodotto dall'array
      this.itemsChanged.next(this.carrello.length);
    }
  }

}
