import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../registration-service/helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/star-galaxy/current-user`);
  }

  //generate token url fire for login user
  public generateToken(loginData:any)
  {
    return this.http.post(`${baseUrl}/star-galaxy/generate-token`,loginData)
  }

  //this method save the token to local storage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    console.log('token saved');
    
    return true;
  }

  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token')
    if(tokenStr===undefined || tokenStr===''||tokenStr===null){
      return false;
    }
    else
    {
      return true;
    }
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //To get token from local storage
  public getToken(){
    return localStorage.getItem('token');
  }

  //user details set
  public setUser(user:any)
  {
    localStorage.setItem('user',JSON.stringify(user));
    console.log('user saved succssfully',user);
    
  }

 //get user Details
 public getUser(){
  let userStr=localStorage.getItem('user')
  if(userStr!=null){
    return JSON.parse(userStr);
  }
  else{
    this.logout
    return null;
  }
 }

//get User Role
 public getUserRole(){
  let user= this.getUser();
  return user.userRole;
}
  

}
