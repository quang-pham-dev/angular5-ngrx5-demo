import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransferDataService {

  constructor() { }

  private stateCmp1 = new Subject<number>();
  private stateCmp2 = new Subject<number>();

  setStateCmp1(data: number) {
    this.stateCmp1.next(data);
  }

  getStateCmp1(): Observable<number> {
    return this.stateCmp1.asObservable();
  }

  setStateCmp2(data: number) {
    this.stateCmp2.next(data);
  }

  getStateCmp2(): Observable<number> {
    return this.stateCmp2.asObservable();
  }
}
