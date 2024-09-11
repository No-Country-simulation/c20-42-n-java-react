import { Component } from '@angular/core';
import { Paciente } from '../../../../core/services/api-client/models/paciente';
import { DoctorControllerService, EspecialidadControllerService, PacienteControllerService } from '../../../../core/services';
import { Doctor } from '../../../../core/services/api-client/models/doctor';

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
