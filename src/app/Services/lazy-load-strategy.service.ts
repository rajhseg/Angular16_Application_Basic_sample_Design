import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadStrategyService extends PreloadingStrategy{

  override preload(route: Route, fn: () => Observable<any>): Observable<any> {
     if(route.data && route.data["preload"]){
      return fn();
     }
     else{
      return of(null);
     }
  }

  constructor() { 
    super();
  }
}
