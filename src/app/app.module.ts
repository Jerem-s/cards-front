import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardsComponent} from './cards/cards.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OrdersComponent} from './orders/orders.component';

const routes: Routes = [
  {path: 'cards', component: CardsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: '**', component: CardsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
