import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDetailComponent } from './full-detail.component';

describe('FullDetailComponent', () => {
  let component: FullDetailComponent;
  let fixture: ComponentFixture<FullDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
