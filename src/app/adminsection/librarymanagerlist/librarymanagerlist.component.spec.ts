import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymanagerlistComponent } from './librarymanagerlist.component';

describe('LibrarymanagerlistComponent', () => {
  let component: LibrarymanagerlistComponent;
  let fixture: ComponentFixture<LibrarymanagerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrarymanagerlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrarymanagerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
