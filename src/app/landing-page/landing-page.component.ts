import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  datafromTable: any;
  datafromCatrd: any;
  hideAndShow = false;
  emailpattern: string | RegExp =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  onrecivedata($event: any) {
    this.datafromTable = $event;
  }

  onReciveDataFromCard($event: any) {
    this.datafromCatrd = $event;
  }

  myformData: any = {};
  showTempForm() {
    if (this.hideAndShow) {
      this.hideAndShow = false;
    } else {
      this.hideAndShow = true;
    }
  }

  saveform(_t13: NgForm) {
    if (_t13.invalid) {
      alert('failed');
      return;
    }
    if (_t13.valid) {
      alert('sucess');
      _t13.resetForm();
    }
    console.log(_t13);
    console.log(this.myformData);
  }

  valueinput: any;
  valueprnt(el: any) {
    console.log(el, 'el');
    console.log(this.valueinput);
  }
}
