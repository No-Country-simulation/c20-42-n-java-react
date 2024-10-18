import { Component } from '@angular/core';
import { Doctor, Especialidad } from '../../../core/services/api-client/models';
import {
  DoctorControllerService,
  EspecialidadControllerService,
} from '../../../core/services/api-client/services';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.css',
})
export class TurnosComponent {
  especialidades: Especialidad[] = [];
  doctores: Doctor[] = [];
  doctoresPorEspecialidad: { [key: number]: Doctor[] } = {};
  selectedEspecialidad: number | null = null;
  selectedDoctor: number | null = null;

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
      .obtenerDoctores({ especialidad: especialidadId })
      .subscribe({
        next: (doctores: Doctor[]) => {
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

  onEspecialidadChange() {
    if (this.selectedEspecialidad !== null) {
      this.doctores =
        this.doctoresPorEspecialidad[this.selectedEspecialidad] || [];
      this.selectedDoctor = null; // Resetear el doctor seleccionado
    } else {
      this.doctores = [];
    }
  }
}
