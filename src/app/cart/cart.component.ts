import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {


  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,) { }

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    if(this.checkoutForm.valid) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    // console.warn(this.checkoutForm.value);
    window.alert('Your order has been submitted:' + ' Name:'
    + JSON.stringify(this.checkoutForm.value.name) + ' Address:' + JSON.stringify(this.checkoutForm.value.address));
    this.checkoutForm.reset();
    }
  }

  deleteItem(product:any):void {
    this.cartService.deleteProduct(product);
  }
}
