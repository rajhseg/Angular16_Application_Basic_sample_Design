import { Injectable, WritableSignal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private isAuth: boolean = false;
  private isAuth$: WritableSignal<boolean> = signal(false);
  private token: string = '';

  public isAuthChange = toObservable(this.isAuth$);

  constructor() { 
    // for testing set the Token
    this.setToken('asdfghjkl');
  }

  setToken(val: string){
    this.token = val;
    this.isAuth = true;
    this.isAuth$.set(true);
  }

  clearToken(){
    this.token = '';
    this.isAuth = false;
    this.isAuth$.set(false);
  }

  isValid(): boolean{
    return this.isAuth;
  }

}
