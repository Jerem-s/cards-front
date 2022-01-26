import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

interface Card {
  id: number;
  color: string;
  value: string;
}

interface CardResponse {
  cards: Card[];
}

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
