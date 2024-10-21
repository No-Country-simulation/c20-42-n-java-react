import {Component, OnInit} from '@angular/core';
import {DoctorControllerService} from "../../../core/services/api-client/services/doctor-controller.service";
import {getUserFromLocalStorage} from "../../../core/guards/auth.guard";
import {PacienteRes} from "../../../core/services/api-client/models/paciente-res";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit{
  idDoctor!:number;
  pacientes!: PacienteRes[];

  constructor(private _doctorService:DoctorControllerService) {
  }

  ngOnInit(): void {
    this.idDoctor = getUserFromLocalStorage().entidadId;
    this._doctorService.obtenerPacientes1({id:this.idDoctor}).subscribe({
      next: (value) => {
        this.pacientes = value;
      },
      error: error => {
        console.log(error);
      }
    })
  }




}
