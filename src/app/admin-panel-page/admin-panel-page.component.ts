import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductForm } from '../auth/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent {

  allProducts : ProductForm[] = [];

  formWindow : boolean = false;

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
    this.fetchProduct();
  }

  onProductsFetch(){
    this.fetchProduct();
  }

  userLogout(){
    this.authService.logout()
  }  

  onProductCreate(products : ProductForm){
    const headers = new HttpHeaders({'myHeader' : 'GM'});
    this.http.post<{name : string}>(
      'https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products.json', products,
    {headers : headers })
    .subscribe((res) => {
      console.log(res)
    })
  }

  private fetchProduct(){
    this.http.get('https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products.json')
    .pipe(map((res) => {
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id: key})
        }
      }
      return products;
    }))
    .subscribe((products) => {
      console.log(products)
      this.allProducts = products;
    })
  }

}
