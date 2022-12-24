import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${userId}`);
  } 

  createUser(formValue: { picture: string, firstName: string, lastName: string, email: string }): void {
    
  }
}
