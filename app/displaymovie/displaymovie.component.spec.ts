import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymovieComponent } from './displaymovie.component';

describe('DisplaymovieComponent', () => {
  let component: DisplaymovieComponent;
  let fixture: ComponentFixture<DisplaymovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaymovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaymovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
