import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {OrderColorResponse} from "../models/order-color-response";
import {OrderValueResponse} from "../models/order-value-response";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) {
  }

  getOrderColors(): Observable<OrderColorResponse> {
    return this.httpClient.get<OrderColorResponse>(`${environment.apiUrl}/api/order-colors`);
  }

  getOrderValues(): Observable<OrderValueResponse> {
    return this.httpClient.get<OrderValueResponse>(`${environment.apiUrl}/api/order-values`);
  }

  saveValues(values: string[]): void {
    this.httpClient.post(`${environment.apiUrl}/api/order-values`, {values}).subscribe();
  }

  saveColors(colors: string[]): void {
    this.httpClient.post(`${environment.apiUrl}/api/order-colors`, {colors}).subscribe();
  }
}
