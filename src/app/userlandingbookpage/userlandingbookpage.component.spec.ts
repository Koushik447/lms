import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandingbookpageComponent } from './userlandingbookpage.component';

describe('UserlandingbookpageComponent', () => {
  let component: UserlandingbookpageComponent;
  let fixture: ComponentFixture<UserlandingbookpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlandingbookpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserlandingbookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
