import {Component, OnInit} from '@angular/core';
import {Especialidad} from '../../../../core/services/api-client/models/especialidad';
import {
  EspecialidadControllerService
} from '../../../../core/services/api-client/services/especialidad-controller.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css',
})
export class SpecialtiesComponent implements OnInit {
  especialidades: Especialidad[] = [];

  constructor(private especialidadService: EspecialidadControllerService) {}

  ngOnInit() {
    this.obtenerEspecialidades();
  }

  //   // con filtro de foto
  // obtenerEspecialidades() {
  //   this.especialidadService.obtenerEspecialidad().subscribe({
  //     next: (value) => {
  //       this.especialidades = value.filter(
  //         (especialidad) => especialidad.fotoUrl
  //       );
  //       console.log(this.especialidades);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching especialidad:', err);
  //     },
  //     complete: () => {
  //       console.log('especialidad fetching completed');
  //     },
  //   });
  // }

  //   // sin fin
  obtenerEspecialidades() {
    this.especialidadService.obtenerEspecialidad().subscribe({
      next: (value) => {
        this.especialidades = value; // Eliminar el filtro
        console.log(this.especialidades);
      },
      error: (err) => {
        console.error('Error fetching especialidad:', err);
      },
      complete: () => {
        console.log('especialidad fetching completed');
      },
    });
  }
}
