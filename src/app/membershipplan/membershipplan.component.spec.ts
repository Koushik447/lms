import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipplanComponent } from './membershipplan.component';

describe('MembershipplanComponent', () => {
  let component: MembershipplanComponent;
  let fixture: ComponentFixture<MembershipplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
