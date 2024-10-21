import {Component, OnInit} from '@angular/core';
import {DoctorControllerService} from '../../../../core/services/api-client/services/doctor-controller.service';
import {DoctorRes, Especialidad} from '../../../../core/services/api-client/models';
import {EspecialidadControllerService} from '../../../../core/services/api-client/services';

//import * as console from "node:console";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent implements OnInit {
  especialidades: Especialidad[] = [];
  doctoresPorEspecialidad: { [key: number]: DoctorRes[] } = {};

  constructor(
    private especialidadService: EspecialidadControllerService,
    private doctorService: DoctorControllerService
  ) {}

  ngOnInit(): void {
    this.obtenerEspecialidades();
  }

  obtenerEspecialidades() {
    this.especialidadService.obtenerEspecialidad().subscribe({
      next: (value) => {
        this.especialidades = value;
        console.log(this.especialidades);

        // Iterar sobre cada especialidad y filtrar doctores por su ID
        this.especialidades.forEach((especialidad: Especialidad) => {
          if (especialidad.id !== undefined) {
            this.filtrarDoctoresPorEspecialidad(especialidad.id);
          }
        });
      },
      error: (err) => {
        console.error('Error fetching especialidad:', err);
      },
      complete: () => {
        console.log('especialidad fetching completed');
      },
    });
  }

  filtrarDoctoresPorEspecialidad(especialidadId: number) {
    this.doctorService
      .obtenerDoctores({especialidad: especialidadId})
      .subscribe({
        next: (doctores: DoctorRes[]) => {
          if (doctores.length > 0) {
            this.doctoresPorEspecialidad[especialidadId] = doctores;
          }
        },
        error: (err) => {
          console.error('Error fetching doctores:', err);
        },
        complete: () => {
          console.log('doctores fetching completed');
        },
      });
  }
  
}
