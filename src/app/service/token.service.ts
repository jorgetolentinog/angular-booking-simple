import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private key = 'token';

  save(token: string) {
    localStorage.setItem(this.key, token);
  }

  clear() {
    localStorage.removeItem(this.key);
  }

  exists(): boolean {
    const token = localStorage.getItem(this.key);
    return !!token;
  }

  get(): string {
    return localStorage.getItem(this.key) || '';
  }
}
