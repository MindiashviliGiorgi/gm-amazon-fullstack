import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gm-amazon';

  ngOnInit():void {
    initializeApp(firebaseConfig)
  }



}
