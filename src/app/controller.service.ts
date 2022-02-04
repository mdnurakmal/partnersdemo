import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  selectBySolution: EventEmitter<string> = new EventEmitter();

  emitNavChangeEvent(s) {
    this.selectBySolution.emit(s);
  }
  getNavChangeEmitter() {
    return this.selectBySolution;
  }
  constructor() { }
}
