import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', redirectTo : "login", pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'register', component : RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
