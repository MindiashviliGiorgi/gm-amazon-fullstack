import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService : AuthService, private router : Router){}

  ngOnInit():void {}

  menu : boolean = false;

  userLogout(){
    this.authService.logout()
    this.router.navigate(['/']);
  }  

}
