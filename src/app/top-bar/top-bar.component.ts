import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  items = 0;
  itemsSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems().length;
    this.itemsSubscription = this.cartService.itemsChanged.subscribe((itemsCount: number) => {
      this.items = itemsCount;
    });
  }

  ngOnDestroy() {
    this.itemsSubscription!.unsubscribe();
  }
}






