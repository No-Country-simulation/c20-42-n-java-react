import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TurnosDoctorComponent} from './turnos-doctor.component';

describe('TurnosDoctorComponent', () => {
  let component: TurnosDoctorComponent;
  let fixture: ComponentFixture<TurnosDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurnosDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
