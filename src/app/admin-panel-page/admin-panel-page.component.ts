import { Component, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductForm } from '../auth/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { ProductsService } from '../auth/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent {

  allProducts : ProductForm[] = [];
  isFetching : boolean = false;
  windowVariable : boolean = true;
  editMode : boolean = false;
  currentProductId : string;

  @ViewChild('productsForm') nForm : NgForm;

  productList : ProductForm[] = [];

  constructor(private authService : AuthService, private http : HttpClient, private productService : ProductsService, private router : Router){}

  ngOnInit():void {
    this.fetchProduct();
  }

  onProductsFetch(){
    this.fetchProduct();
  }

  userLogout(){
    this.authService.logout()
    this.router.navigate(['/']);
  }  

  onDeleteProduct(id : string){
    this.productService.deleteProduct(id)
  }

  onDeleteAllProducts(){
    this.productService.deleteAllProducts();
  }

  onProductCreate(products : ProductForm){
    if(!this.editMode){
      this.productService.createProduct(products)
    }else {
      this.productService.updateProduct(this.currentProductId, products);
      this.nForm.setValue({
        name : '',
        serialCode : '',
        category : '',
        price : '',
      });
    }
  }

  clearForm(){
    this.nForm.setValue({
      name : '',
      serialCode : '',
      category : '',
      price : '',
    });
  }

  private fetchProduct(){
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
    })
  }

  onEditClicked(id : string){
    this.currentProductId = id;
    this.windowVariable = true;
    let currentProduct = this.allProducts.find((p) => {return p.id === id});
    this.nForm.setValue({
      name : currentProduct.name,
      serialCode : currentProduct.serialCode,
      category : currentProduct.category,
      price : currentProduct.price,
    });
    this.editMode = true;
  }

  searchValue : string = '';
  searchTextChange : EventEmitter<string> = new EventEmitter<string>();
  searchItem(){
    this.searchTextChange.emit(this.searchValue)
  }


}
