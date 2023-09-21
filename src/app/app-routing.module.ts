import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';

const routes: Routes = [
  {
    path : '',
    component : AdminPanelPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
