import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibmanagerComponent } from './libmanager.component';

describe('LibmanagerComponent', () => {
  let component: LibmanagerComponent;
  let fixture: ComponentFixture<LibmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibmanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
