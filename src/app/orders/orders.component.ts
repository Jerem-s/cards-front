import {Component, OnInit} from '@angular/core';
import {OrdersService} from "./orders.service";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  colorValueInit: string = "";
  valuesValueInit: string = "";


  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.getOrderColors().subscribe(response => this.colorValueInit = response.colors.map(value => value.color).join(","));
    this.ordersService.getOrderValues().subscribe(response => this.valuesValueInit = response.values.map(value => value.value).join(","));
  }


  saveValues(value: string) {
    const strings: string[] = value.split(",");
    this.ordersService.saveValues(strings);
  }

  saveColors(value: string) {
    const strings: string[] = value.split(",");
    this.ordersService.saveColors(strings);
  }
}
