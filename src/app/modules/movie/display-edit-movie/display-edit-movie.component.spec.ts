import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEditMovieComponent } from './display-edit-movie.component';

describe('DisplayEditMovieComponent', () => {
  let component: DisplayEditMovieComponent;
  let fixture: ComponentFixture<DisplayEditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEditMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
