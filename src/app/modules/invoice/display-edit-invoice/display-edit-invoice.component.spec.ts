import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEditInvoiceComponent } from './display-edit-invoice.component';

describe('DisplayEditInvoiceComponent', () => {
  let component: DisplayEditInvoiceComponent;
  let fixture: ComponentFixture<DisplayEditInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEditInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEditInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
