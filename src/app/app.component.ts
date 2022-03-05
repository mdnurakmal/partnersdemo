import { Component, OnInit } from '@angular/core';
import { Demo } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  
  constructor() {}

 
  ngOnInit(): void {
    
  }



  db : Demo[];
  addItem(newItem: Demo[]) {
    this.db= newItem;
  }

}

