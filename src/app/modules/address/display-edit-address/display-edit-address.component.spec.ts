import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEditAddressComponent } from './display-edit-address.component';

describe('DisplayEditAddressComponent', () => {
  let component: DisplayEditAddressComponent;
  let fixture: ComponentFixture<DisplayEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEditAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
