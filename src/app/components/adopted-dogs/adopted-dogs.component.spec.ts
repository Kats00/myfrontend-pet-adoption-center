import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedDogsComponent } from './adopted-dogs.component';

describe('AdoptedDogsComponent', () => {
  let component: AdoptedDogsComponent;
  let fixture: ComponentFixture<AdoptedDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptedDogsComponent]
    });
    fixture = TestBed.createComponent(AdoptedDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
