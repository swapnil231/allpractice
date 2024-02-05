import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingdropComponent } from './cascadingdrop.component';

describe('CascadingdropComponent', () => {
  let component: CascadingdropComponent;
  let fixture: ComponentFixture<CascadingdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CascadingdropComponent]
    });
    fixture = TestBed.createComponent(CascadingdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
