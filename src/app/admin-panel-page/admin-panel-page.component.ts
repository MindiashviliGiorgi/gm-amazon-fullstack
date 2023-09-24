import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductForm } from '../auth/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { ProductsService } from '../auth/products.service';

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

  @ViewChild('productsForm') nForm : NgForm;

  productList : ProductForm[] = [];

  constructor(private authService : AuthService, private http : HttpClient, private productService : ProductsService){}

  ngOnInit():void {
    this.fetchProduct();
  }

  onProductsFetch(){
    this.fetchProduct();
  }

  userLogout(){
    this.authService.logout()
  }  

  onDeleteProduct(id : string){
    this.productService.deleteProduct(id)
  }

  onDeleteAllProducts(){
    this.productService.deleteAllProducts();
  }

  onProductCreate(products : ProductForm){
    this.productService.createProduct(products)
  }

  private fetchProduct(){
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
    })
  }

  onEditClicked(id : string){
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

}
