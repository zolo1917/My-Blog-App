import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse } from "@angular/common/http"
import { Observable, tap } from "rxjs";

@Injectable()
export class authInterceptor implements HttpInterceptor{

  constructor(){
    console.log("This is the interceptor")
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers;
    headers.append("BearerToken", <string>localStorage.getItem('token'));
    // updating the request parameters to add the authorization token
    const updatedRequest = req.clone({
      setHeaders: {
        Authorization : `Bearer ${localStorage.getItem('token')}`,
        Content : 'Applicaiton/json'
      }
    });
    updatedRequest
    //logging the updated Parameters to browser's console
    console.log("Before making api call : ", updatedRequest);
    return next.handle(req).pipe(tap(event =>{
      if(event instanceof HttpResponse){
        console.log("API call success: ", event)
      }
    },
    //logging the http response to browser's console in case of a failuer
    error=>{
      if(event instanceof HttpResponse){
        console.log("API call response: ", event)
      }
    }))
  }


}
