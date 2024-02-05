import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfpageComponent } from './top-ofpage.component';

describe('TopOfpageComponent', () => {
  let component: TopOfpageComponent;
  let fixture: ComponentFixture<TopOfpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopOfpageComponent]
    });
    fixture = TestBed.createComponent(TopOfpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
