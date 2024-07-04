import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.get<any>(`/login?email=${email}&pwd=${password}`);
  }
  setToken(token: string): void {
    // Store the token in local storage
    localStorage.setItem('token', token);
  }
  clearToken(): void {
    // Clear the token from local storage
    localStorage.removeItem('token');
  }
  getToken(): string | null {
    // Retrieve the token from local storage
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    // Check if the token exists
    return !!this.getToken();
  }
}
