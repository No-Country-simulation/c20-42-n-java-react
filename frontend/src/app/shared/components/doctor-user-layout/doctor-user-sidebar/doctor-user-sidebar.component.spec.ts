import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUserSidebarComponent } from './doctor-user-sidebar.component';

describe('DoctorUserSidebarComponent', () => {
  let component: DoctorUserSidebarComponent;
  let fixture: ComponentFixture<DoctorUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorUserSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
