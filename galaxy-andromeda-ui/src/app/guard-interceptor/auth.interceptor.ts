import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/loginservice/login-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //add the JWT token(localStrorage) in every request.
    const authToken = this.loginService.getToken();
    console.log("token intercepted", authToken);
    if(authToken!=null)
    {
      request=request.clone({
        setHeaders:{Authorization:`Bearer ${authToken}`},
      })
    }
    
    return next.handle(request);
  }
}


