import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  getOrderColors(): Observable<{ colors: string[] }> {
    return this.httpClient.get<{ colors: string[] }>(`${environment.apiUrl}/api/order-colors/last`);
  }

  getOrderValues(): Observable<{ values: string[] }> {
    return this.httpClient.get<{ values: string[] }>(`${environment.apiUrl}/api/order-values/last`);
  }
}
