import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from './auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  ngOnInit():void {}

  passwordMatched : boolean = true;

  login(form : LoginForm){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((useCredential) => {
      this.router.navigate(['/'])
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message;
      alert(errorCode + errorMessage)
    })
  };

  register(form : RegisterForm){
    if(form.password != form.confirm_password){
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      alert('Register Done')
    })
    .catch((error) => {
    })
  }


}
