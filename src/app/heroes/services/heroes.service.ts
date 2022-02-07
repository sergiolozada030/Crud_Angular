import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getListaHeroes() {
    return this.http.get(this.url);
  }
}
