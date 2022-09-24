import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * to get users list
   * @returns
   */
  public getUsers(): any {
    return this.http.get(`${environment.baseUrl}/users`);
  }

  /**
   * to get single user  detail by id
   * @param id user-id
   * @returns
   */
  public getUserById(id: number): any {
    return this.http.get(`${environment.baseUrl}/users/${id}`);
  }

  /**
   * to register new user
   * @param data user detail
   * @returns
   */
  public registerUser(data: any): any {
    return this.http.post(`${environment.baseUrl}/users`, data);
  }

  /**
   * to update user profile
   * @param id user-id
   * @param data user-datail
   * @returns
   */
  public updateProfile(id: number, data: any): any {
    return this.http.put(`${environment.baseUrl}/users/${id}`, data);
  }

  /**
   * to patch perticular value
   * @param id user-id
   * @param data user detail
   * @returns
   */
  public patchProfile(id: number, data: any): any {
    return this.http.patch(`${environment.baseUrl}/users/${id}`, data);
  }
}
