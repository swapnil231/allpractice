import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehavioursubjectService {
  constructor() {}
  private myBehaviourSubject = new BehaviorSubject([]);

  setvalue(value: any) {
    this.myBehaviourSubject.next(value);
  }

  getvalue() {
    return this.myBehaviourSubject.asObservable();
  }

  private myBehaviourSubject2 = new BehaviorSubject([]);

  setvalue2(value: any) {
    this.myBehaviourSubject2.next(value);
  }

  getvalue2() {
    return this.myBehaviourSubject2.asObservable();
  }
}
