import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get(this.url);
  }

  getInfoUserById(id: number){
    return this.http.get(this.url + '/' +id);
  }
}
