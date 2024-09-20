import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/loginservice/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit  {

  isLoggedIn=false;
  user:any=null;

  constructor(public loginservice:LoginServiceService,private router:Router){}
  ngOnInit(): void {
    this.isLoggedIn=this.loginservice.isLoggedIn();
    this.user=this.loginservice.getUser();
    this.loginservice.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.loginservice.isLoggedIn();
      this.user=this.loginservice.getUser();
    })
  }

  public logout(){
    this.loginservice.logout();
    window.location.reload()
  }

  
  

}
