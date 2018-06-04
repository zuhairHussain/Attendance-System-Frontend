import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if(token == null){
      token = 'null';
    }
    let t = JSON.parse(token)

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${t.access}`
      }
    });

    return next.handle(req);
  }
}