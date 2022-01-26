import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = [
    {title: 'Cards', route: 'cards'},
    {title: 'Orders', route: 'orders'},

  ];

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
