import {Component, OnInit} from '@angular/core';
import {PacienteControllerService} from "../../../core/services/api-client/services/paciente-controller.service";
import {Paciente} from "../../../core/services/api-client/models/paciente";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit{

  pacientes?: Paciente[];

  constructor(private _pacientesService:PacienteControllerService) {
  }

  ngOnInit(): void {
    //TODO cambiar a GET /doctores/id/pacientes
    this._pacientesService.obtenerPacientes().subscribe({
      next: (value) => {
        this.pacientes = value;
      },
      error: error => {
        console.log(error);
      }
    })
  }




}
