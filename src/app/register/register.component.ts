import { Component } from '@angular/core';
import { RegisterForm } from '../auth/auth';

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

  constructor(){}

  ngOnInit():void {}

  submit(){
    
  }


}
