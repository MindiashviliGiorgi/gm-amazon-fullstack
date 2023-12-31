import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path : '',
    component : LoginRegisterPageComponent
  },
  {
    path : 'panel',
    component : AdminPanelPageComponent
  },
  {
    path : 'home',
    component : HomePageComponent
  },
  {
    path : 'about',
    component : AboutPageComponent
  },
  {
    path : 'contact',
    component : ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
