import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardsectionComponent } from './maincardsection.component';

describe('MaincardsectionComponent', () => {
  let component: MaincardsectionComponent;
  let fixture: ComponentFixture<MaincardsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincardsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincardsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
