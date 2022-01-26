import {Component, OnInit} from '@angular/core';
import {CardsService} from "./cards.service";
import {Card} from "../models/card";
import {OrderService} from "../order/order.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  orderColors: string[] = [];
  orderValues: string[] = [];

  constructor(private cardsService: CardsService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.refreshCards();
    this.orderService.getOrderColors().subscribe(value => this.orderColors = value.colors);
    this.orderService.getOrderValues().subscribe(value => this.orderValues = value.values);
  }

  refreshCards(): void {
    this.cardsService.get().subscribe(({cards}) => this.cards = cards);
  }

  getCardImgPath(card: Card): string {
    return "assets/cards/" + card.value.toLocaleLowerCase() + "_of_" + card.color.toLocaleLowerCase() + `.svg`;
  }

  sort(): void {
    this.cards = this.orderColors?.map(orderColor => {
      return this.cards.filter(card => card.color === orderColor).sort(
        (cardA, cardB) => (this.orderValues.indexOf(cardA.value) - this.orderValues.indexOf(cardB.value))
      )
    }).flat();


  }

}
