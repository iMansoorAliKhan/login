import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(uname,pw){

    // return this.http.post('/api/auth.php', {
    //   uname,
    //   pw
    // }).subscribe(data=> {
    //   console.log(data,"is what we got from the server")
    // });

  }
}
