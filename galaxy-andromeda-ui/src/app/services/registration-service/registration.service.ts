import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  //this method is call user register API 
  public registerUser(user:any)
  {
    return this.http.post(`${baseUrl}/star-galaxy/create-user`,user);
  }
}
