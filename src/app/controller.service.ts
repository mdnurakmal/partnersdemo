import { EventEmitter, Injectable } from '@angular/core';
import { Demo } from './models';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  selectBySolution: EventEmitter<string> = new EventEmitter();
  demo: EventEmitter<Demo> = new EventEmitter();

  db : Demo[];

  emitDemosDb(s) {
    this.db = s;
  }

  getDemo(index)
  {
    return this.db[index];
  }

  emitSolutionPillarFilter(s) {
    this.selectBySolution.emit(s);
  }
  getemitSolutionPillarFilter() {
    return this.selectBySolution;
  }
  constructor() { }
}
