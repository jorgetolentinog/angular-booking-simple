import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  create(values: any): Observable<any> {
    return this.http.post('http://localhost:8080/bookings', values, {
      headers: {
        authorization: this.tokenService.get(),
      },
    });
  }

  findAll(): Observable<any> {
    return this.http.get('http://localhost:8080/bookings', {
      headers: {
        authorization: this.tokenService.get(),
      },
    });
  }

  cancel(bookingId: string): Observable<any> {
    return this.http.post(
      'http://localhost:8080/bookings/' + bookingId + '/cancel',
      {},
      {
        headers: {
          authorization: this.tokenService.get(),
        },
      }
    );
  }
}
