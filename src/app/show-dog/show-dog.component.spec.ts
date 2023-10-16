import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDogComponent } from './show-dog.component';

describe('ShowDogComponent', () => {
  let component: ShowDogComponent;
  let fixture: ComponentFixture<ShowDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDogComponent]
    });
    fixture = TestBed.createComponent(ShowDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
