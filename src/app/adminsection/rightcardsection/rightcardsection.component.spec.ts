import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcardsectionComponent } from './rightcardsection.component';

describe('RightcardsectionComponent', () => {
  let component: RightcardsectionComponent;
  let fixture: ComponentFixture<RightcardsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightcardsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightcardsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
