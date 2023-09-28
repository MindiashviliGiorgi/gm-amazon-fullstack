import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductForm } from '../auth/auth';
import { ProductsService } from '../auth/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  currentContainer : boolean = true;


}
