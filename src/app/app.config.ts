import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { provideRouter, ROUTER_INITIALIZER, withDebugTracing, withHashLocation, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { LazyLoadStrategyService } from './Services/lazy-load-strategy.service';
import { APP_BASE_HREF } from '@angular/common';
import { TokenService } from './Services/token.service';
import { EnvironmentService } from './Services/environment.service';
import { lastValueFrom, tap, of } from 'rxjs';
import { RetryInterceptor, retryInterceptorFn } from './interceptors/retryInterceptor';

import { FileLogger } from './Models/FileLogger';
import { DbLogger } from './Models/DbLogger';
import { Logger } from './Models/Logger';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(LazyLoadStrategyService), withDebugTracing(), withHashLocation()),
    provideHttpClient(),

    {
      provide: HTTP_INTERCEPTORS,
      useExisting: retryInterceptorFn,
      multi: true
    },
    { 
      provide: APP_BASE_HREF, 
      useValue: 'myapp' 
    },
    { 
      provide: APP_INITIALIZER,
      useFactory: (http: HttpClient, envObj: EnvironmentService)=>{
          return ()=>{
            
            // Initialize the config and Environment values from Server

            //let req$ = http.get('https://www.google.com').pipe(tap((x)=> envObj.setValue('DEV')));
            //return lastValueFrom(req$);

            return of(true).pipe(tap((x)=> envObj.setValue('DEV')));
          };
      },
      deps:[HttpClient, EnvironmentService],
      multi: true
    },
    {
      provide: Logger,
      useFactory:(envObj: EnvironmentService)=>{
          return envObj.getValue() =='DEV' ? new FileLogger() : new DbLogger();
      },
      multi: false,
      deps:[EnvironmentService]
    }
  ]
};
