import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login() {
    return this.http.get(`${this.baseUrl}/usuarios/1`);
  }
}
