import { Component } from '@angular/core';
import { LoginForm } from '../auth/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form : LoginForm = {
    email : '',
    password : '',
  };

  constructor(private authService : AuthService){}

  ngOnInit():void {}

  submit(){
    this.authService.login(this.form)
  }

}
