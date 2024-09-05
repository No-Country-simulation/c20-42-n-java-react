import { Component } from '@angular/core';
import {Paciente} from "../../../../core/models/paciente";
import {PacienteControllerService} from "../../../../core/services/paciente-controller.service";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  //Esto no va aca, obviamente jeje. Es para probar
  pacientes:Paciente[]=[];

  constructor(private pacientesService: PacienteControllerService) {
    pacientesService.obtenerPacientes().subscribe({
      next: (value) => {
        this.pacientes = value;
      },
      error: (err) => {
        console.error('Error fetching pacientes:', err);
      },
      complete: () => {
        console.log('Pacientes fetching completed');
      }
    });
  }
}
