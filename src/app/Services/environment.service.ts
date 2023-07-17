import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  ENV: string = '';

  constructor() { }

  setValue(value: string) {
    this.ENV =value;
  }

  getValue(): string {
    return this.ENV;
  }
}
