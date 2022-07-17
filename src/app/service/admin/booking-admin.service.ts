import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class BookingAdminService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  findAll(): Observable<any> {
    return this.http.get('http://localhost:8080/admin/bookings', {
      headers: {
        authorization: this.tokenService.get(),
      },
    });
  }

  cancel(bookingId: string): Observable<any> {
    return this.http.post(
      'http://localhost:8080/admin/bookings/' + bookingId + '/cancel',
      {},
      {
        headers: {
          authorization: this.tokenService.get(),
        },
      }
    );
  }

  confirm(bookingId: string): Observable<any> {
    return this.http.post(
      'http://localhost:8080/admin/bookings/' + bookingId + '/confirm',
      {},
      {
        headers: {
          authorization: this.tokenService.get(),
        },
      }
    );
  }
}
