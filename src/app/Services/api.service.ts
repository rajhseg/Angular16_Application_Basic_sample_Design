import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async TestingRetryHttpCall(){
    let data = await this.http.get('https://reqres.in/api/userss/2/3').toPromise();
  }
}
