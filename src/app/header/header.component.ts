import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoFormComponent } from '../info-form/info-form.component';
import { Router } from '@angular/router';
import { ViewportScrollPosition } from '@angular/cdk/scrolling';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private matdilog: MatDialog,
    private router: Router,
    private viewscroller: ViewportScroller
  ) {}

  isfixedNavBar = false;
  opendilog() {
    this.matdilog.open(InfoFormComponent, {
      width: 'auto',
      height: '120vh',
      data: { title: 'adduser' },
    });
  }

  openroute() {
    this.router.navigate(['/comp1']);
  }

  @HostListener('window:scroll') onWindowScroll() {
    const yposition = this.viewscroller.getScrollPosition()[1];
    this.isfixedNavBar = yposition > 25;
  }
}
