import {Component, OnInit} from '@angular/core';
import {CardsService} from "./cards.service";
import {Card} from "../models/card";
import {OrdersService} from "../orders/orders.service";
import {ColorCard} from "../models/color-card";
import {ValueCard} from "../models/value-card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  orderColors: ColorCard[] = [];
  orderValues: ValueCard[] = [];

  constructor(private cardsService: CardsService, private orderService: OrdersService) {
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
      return this.cards.filter(card => card.color === orderColor.color).sort(
        (cardA, cardB) => (this.orderValues.map(value => value.value).indexOf(cardA.value) - this.orderValues.map(value => value.value).indexOf(cardB.value))
      )
    }).flat();


  }

}
