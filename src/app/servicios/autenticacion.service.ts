import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private http = inject(HttpClient);

  constructor() {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http
      .post<any>('http://localhost:8000/api/login_check', user)
      .pipe(
        tap((tokens) => {
          this.doLoginUser(user.username, tokens);
        })
      );
  }

  isLoggedIn() {
    return this.isAuthenticatedSubject.value;
  }
  private doLoginUser(username: string, tokens: any) {
    this.loggedUser = username;
    this.storeJwtToken(tokens.token);
    this.isAuthenticatedSubject.next(true);
  }
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
  logout() {
    localStorage.removeItem(this.JWT_TOKEN);

    this.isAuthenticatedSubject.next(false);
  }
}
