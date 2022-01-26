import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {CardResponse} from "../models/card-response";


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<CardResponse> {
    return this.httpClient.get<CardResponse>(`${environment.apiUrl + "/api/cards"}`);
  }


}
