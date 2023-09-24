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

  isAuthenticated : boolean = false;
  passwordMatched : boolean = true;
  registerDone : boolean = false;

  login(form : LoginForm){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((useCredential) => {
      this.isAuthenticated = true;
      this.router.navigate(['/panel']);
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message;
      alert(errorCode + errorMessage)
      this.isAuthenticated = false;
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
      this.registerDone = true;
      this.router.navigate(['/panel']);
    })
    .catch((error) => {
      alert('Something Wrong')
    })
  }

  logout(){
    const auth = getAuth()
    signOut(auth).then(() => {
      this.router.navigate(['/loginRegister'])
      alert('You sign out')
    }).catch((error) => {

    })
  }


}
