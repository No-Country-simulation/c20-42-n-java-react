import {Component, OnInit} from '@angular/core';
import {getUserFromLocalStorage} from "../../../core/guards/auth.guard";
import {DoctorControllerService, PacienteRes} from "../../../core/services/api-client";

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
    this._doctorService.obtenerPacientes1(this.idDoctor).subscribe({
      next: (value) => {
        this.pacientes = value;
      },
      error: error => {
        console.log(error);
      }
    })
  }




}
