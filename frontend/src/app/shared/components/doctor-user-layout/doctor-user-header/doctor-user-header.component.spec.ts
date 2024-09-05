import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DoctorUserHeaderComponent} from './doctor-user-header.component';

describe('DoctorUserHeaderComponent', () => {
  let component: DoctorUserHeaderComponent;
  let fixture: ComponentFixture<DoctorUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorUserHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
