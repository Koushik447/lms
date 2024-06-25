import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookcollectionComponent } from './userbookcollection.component';

describe('UserbookcollectionComponent', () => {
  let component: UserbookcollectionComponent;
  let fixture: ComponentFixture<UserbookcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserbookcollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserbookcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
