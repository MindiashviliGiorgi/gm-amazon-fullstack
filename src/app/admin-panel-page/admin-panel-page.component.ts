import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductForm } from '../auth/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent {

  formWindow : boolean = true;

  productList : ProductForm[] = [];

  form : ProductForm = {
    id : '',
    name : '',
    serialCode : '',
    category : '',
    price : '',
  }

  constructor(private authService : AuthService, private http : HttpClient){}

  ngOnInit():void {
    
  }

  userLogout(){
    this.authService.logout()
  }  

  onProductCreate(products : ProductForm){
    const headers = new HttpHeaders({'myHeader' : 'GM'});
    this.http.post('https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products.json', products,
    {headers : headers })
    .subscribe((res) => {
      console.log(res)
    })
  }

}
