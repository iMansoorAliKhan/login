import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    console.log(this.Auth);

    // const target = event.target;
    // const uname = target.querySelector("#u-name").value;
    // const pw = target.querySelector("#u-pass").value;

    // this.Auth.getUserDetails(uname,pw);
  }

}
