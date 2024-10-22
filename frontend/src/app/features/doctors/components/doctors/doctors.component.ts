import {Component, OnInit} from '@angular/core';
import {DoctorControllerService} from '../../../../core/services/api-client/services/doctor-controller.service';
import {DoctorRes, Especialidad} from '../../../../core/services/api-client/models';
import {EspecialidadControllerService} from '../../../../core/services/api-client/services';
import {faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";

//import * as console from "node:console";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent implements OnInit {
  especialidades: Especialidad[] = [];
  doctoresPorEspecialidad: { [key: number]: DoctorRes[] } = {};
  isLoading: boolean = true;

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
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching especialidad:', err);
        this.isLoading = false;
      }
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

  protected readonly faStarHalf = faStarHalf;
  protected readonly faStar = faStar;
}
