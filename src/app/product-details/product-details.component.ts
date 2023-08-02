import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;



  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // Ottiene il product id dalla route attiva in quel momento
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));

    // Trova il prodotto che corrisponde all'id ottenuto dalla route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }



}
