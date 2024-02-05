import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../info-form/info-form.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  value: any = 0;
  data: UserModel[] = [];
  @Input() sendDataToCard: any;
  @Output() sendBackDataToTableO: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: any): void {
    if (this.sendDataToCard) {
      this.data = [this.sendDataToCard, ...this.data];
    }
  }

  decrige(element: any, taskvalue: number) {
    if (taskvalue <= 0) return;
    --taskvalue;

    this.data.forEach((el) => {
      if (el.id == element.id) {
        el.task = taskvalue;
        el.salary = el.task * el.salary;
      }
    });
  }

  incrige(element: any, taskvalue: number) {
    if (taskvalue >= 10) return;
    ++taskvalue;

    this.data.forEach((el) => {
      if (el.id == element.id) {
        el.task = taskvalue;
        el.salary = el.task * el.salary;
      }
    });
  }

  sendBackDataToTable(el: any) {
    console.log(el);
    this.sendBackDataToTableO.emit(el);
  }
}
