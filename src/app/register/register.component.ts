import { Component } from '@angular/core';
import { RegisterForm } from '../auth/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form : RegisterForm = {
    email : '',
    password : '',
    confirm_password : '',
  }

  constructor(private authService : AuthService){}

  ngOnInit():void {}

  submit(){
    this.authService.register(this.form)
  };


}
