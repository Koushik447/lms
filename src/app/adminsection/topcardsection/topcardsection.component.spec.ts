import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcardsectionComponent } from './topcardsection.component';

describe('TopcardsectionComponent', () => {
  let component: TopcardsectionComponent;
  let fixture: ComponentFixture<TopcardsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopcardsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopcardsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
