import { Component, Input, OnInit } from '@angular/core';
import { Demo } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Demo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
