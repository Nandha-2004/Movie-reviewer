import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UloginComponent } from './ulogin.component';

describe('UloginComponent', () => {
  let component: UloginComponent;
  let fixture: ComponentFixture<UloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
