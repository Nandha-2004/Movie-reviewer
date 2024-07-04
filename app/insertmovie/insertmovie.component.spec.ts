import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertmovieComponent } from './insertmovie.component';

describe('InsertmovieComponent', () => {
  let component: InsertmovieComponent;
  let fixture: ComponentFixture<InsertmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertmovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
