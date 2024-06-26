import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivefeedbackComponent } from './givefeedback.component';

describe('GivefeedbackComponent', () => {
  let component: GivefeedbackComponent;
  let fixture: ComponentFixture<GivefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GivefeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GivefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
