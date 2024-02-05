import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent {
  ClickArr: any[] = [];

  generateCircle() {
    this.ClickArr.push({ value: true, count: 0, id: this.ClickArr.length });
    console.log(this.ClickArr);
  }

  changeCircleColorOnclick(id: any) {
    const btn = `#btn${id}`;
    const x = document.querySelector(btn) as HTMLElement;

    if (x.classList.contains('circle') && !x.classList.contains('color')) {
      x.classList.add('color');
      this.ClickArr[id].count++;
      return;
    }

    if (x.classList.contains('color')) {
      x.classList.remove('color');
      this.ClickArr[id].count++;
    }
  }

  clearAll() {
    this.ClickArr = [];
  }

  remove(value: any) {
    console.log(value);
    const index = this.ClickArr.findIndex((el) => el.id == value.id);
    console.log(index);
    // this.ClickArr.splice(index, 1);

    // const btn = `#div${value.id}`;
    // const ele = document.querySelector(btn) as HTMLElement;
    // ele?.remove();
  }
}
