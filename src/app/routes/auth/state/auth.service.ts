import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthDto, AuthResponseDto, RegisterDto } from "./auth.model";
import { authStore } from "./auth.store";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiAuthUrl: string = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(authUser: AuthDto) {
    return this.http.post<AuthResponseDto>(
      `${this.apiAuthUrl}/login`,
      authUser
    );
  }

  register(newUser: RegisterDto) {
    return this.http.post<AuthResponseDto>(
      `${this.apiAuthUrl}/register`,
      {
        firstname : newUser.firstname,
        lastname : newUser.lastname,
        email : newUser.email,
        password : newUser.password
      }
    );
  }

  logout() {
    authStore.reset();
  }
}
