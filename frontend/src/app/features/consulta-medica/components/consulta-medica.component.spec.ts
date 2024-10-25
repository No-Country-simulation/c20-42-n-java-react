import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsultaMedicaComponent} from './consulta-medica.component';

describe('ConsultaMedicaComponent', () => {
  let component: ConsultaMedicaComponent;
  let fixture: ComponentFixture<ConsultaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaMedicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
