import { Component } from '@angular/core';
import { ProductsService } from '../auth/products.service';
import { ProductForm } from '../auth/auth';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  allProducts : ProductForm[] = [];
  
  constructor(private productService : ProductsService){}

  ngOnInit():void {
    this.fetchProduct();
  }

  onProductsFetch(){
    this.fetchProduct();
  }

  private fetchProduct(){
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
    })
  }

}
