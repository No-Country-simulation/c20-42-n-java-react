import {Component} from '@angular/core';
import {Doctor} from '../../../../core/services/api-client/models/doctor';
import {
  EspecialidadControllerService
} from "../../../../core/services/api-client/services/especialidad-controller.service";
import {DoctorControllerService} from "../../../../core/services/api-client/services/doctor-controller.service";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  doctores:Doctor[]=[];

  constructor(private doctoresService: DoctorControllerService,
              private especialidadService: EspecialidadControllerService
  ) {}

  ngOnInit() {
    this.obtenerDoctoresPorEspecialidad();
  }

  obtenerDoctoresPorEspecialidad() {

    //obtiene
    this.doctoresService.obtenerDoctores().subscribe({
      next: (value) => {
        this.doctores = value;
      },
      error: (err) => {
        console.error('Error fetching doctores:', err);
      },
      complete: () => {
        console.log('Doctores fetching completed');
      }
    });
  }


}
