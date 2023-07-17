import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, RetryConfig, retry, timer } from "rxjs";

export const retryInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn)=>{
    let config: RetryConfig = {
        count: 3,
        delay: (error, retryCount)=> {
            
          if(error){
              return timer(2000);
            }
            
            throw error;
        },
      };


    return next(req).pipe(retry(config));
};

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let config: RetryConfig = {
          count: 3,
          delay: (error, retryCount)=> {
              
            if(error){
                return timer(2000);
              }
              
              throw error;
          },
        };

        return next.handle(req).pipe(retry(config))
    }
    
}