import { Component } from '@angular/core';
import { ProductForm } from '../auth/auth';
import { ProductsService } from '../auth/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private productService : ProductsService){}

  ngOnInit():void {
    this.fetchProduct();
  }

  allProducts : ProductForm[] = [];

  onProductsFetch(){
    this.fetchProduct();
  }

  private fetchProduct(){
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
    })
  }

}
