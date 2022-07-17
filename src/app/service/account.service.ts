import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(values: any): Observable<any> {
    return this.http.post('http://localhost:8080/account/login', values);
  }

  register(values: any): Observable<any> {
    return this.http.post('http://localhost:8080/account/register', values);
  }

  userInfo(): Observable<any> {
    return this.http.get('http://localhost:8080/account/userinfo', {
      headers: {
        authorization: this.tokenService.get(),
      },
    });
  }
}
