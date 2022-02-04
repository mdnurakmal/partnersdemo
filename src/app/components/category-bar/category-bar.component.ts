import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControllerService } from '../../controller.service';
@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  filter(e){
    this.conService.emitNavChangeEvent(e);
  }
  
  constructor(private conService: ControllerService) {

   }

  ngOnInit(): void {
  }

}
