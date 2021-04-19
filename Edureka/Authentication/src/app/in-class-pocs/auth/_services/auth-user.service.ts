import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../environments/environment";
import { User } from "../../../domain/user";

@Injectable({ providedIn: "root" })
export class AuthUserService {
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
