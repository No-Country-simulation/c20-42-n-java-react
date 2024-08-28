import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUserLayoutComponent } from './doctor-user-layout.component';

describe('DoctorUserLayoutComponent', () => {
  let component: DoctorUserLayoutComponent;
  let fixture: ComponentFixture<DoctorUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorUserLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
