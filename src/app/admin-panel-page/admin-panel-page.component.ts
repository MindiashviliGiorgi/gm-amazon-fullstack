import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent {

  constructor(private authService : AuthService){}

  ngOnInit():void {
    
  }

  userLogout(){
    this.authService.logout()
  }  

}
