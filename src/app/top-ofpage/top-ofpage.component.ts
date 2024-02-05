import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-ofpage',
  templateUrl: './top-ofpage.component.html',
  styleUrls: ['./top-ofpage.component.scss'],
})
export class TopOfpageComponent {
  constructor(private viewportscroller: ViewportScroller) {}
  isshown = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCordinate = this.viewportscroller.getScrollPosition()[1];
    this.isshown = yCordinate > 400;
  }
  gotoTop() {
    this.viewportscroller.scrollToPosition([0, 0]);
  }
}
