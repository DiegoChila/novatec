import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/response-data';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<ResponseData<User[]>> {
    return this.http.get<ResponseData<User[]>>(`${this.apiUrl}`);
  }

  get(id: number): Observable<ResponseData<User>> {
    return this.http.get<ResponseData<User>>(`${this.apiUrl}/${id}`);
  }

  save(user: User): Observable<ResponseData<User>> {
    return this.http.post<ResponseData<User>>(`${this.apiUrl}`, user);
  }

  update(user: User, id: number): Observable<ResponseData<User>> {
    return this.http.put<ResponseData<User>>(`${this.apiUrl}/${id}`, user);
  }
}
