import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DoctorUserFooterComponent} from './doctor-user-footer.component';

describe('DoctorUserFooterComponent', () => {
  let component: DoctorUserFooterComponent;
  let fixture: ComponentFixture<DoctorUserFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorUserFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUserFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
