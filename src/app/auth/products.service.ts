import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductForm } from './auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  createProduct(products : ProductForm){
    const headers = new HttpHeaders({'myHeader' : 'GM'});
    this.http.post<{name : string}>(
      'https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products.json', products,
    {headers : headers })
    .subscribe((res) => {
    })
    // this.nForm.setValue({
    //   name : '',
    //   serialCode : '',
    //   category : '',
    //   price : '',
    // })
    alert('Tap Fetch Products Button');
  }

  fetchProduct(){
    return this.http.get('https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products.json')
    .pipe(map((res) => {
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id: key})
        }
      }
      return products;
    }))
  }

  deleteProduct(id : string){
    this.http.delete('https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products/' + id + '.json',)
    .subscribe();
    alert('Tap Fetch Products Button');
  }

  deleteAllProducts(){
    this.http.delete('https://gm-97a5f-default-rtdb.europe-west1.firebasedatabase.app/products.json')
    .subscribe();
    alert('Tap Fetch Products Button');
  }

}
