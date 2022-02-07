import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getListaHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.url);
  }
}
