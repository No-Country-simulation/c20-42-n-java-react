import {Component, OnInit} from '@angular/core';
import {PacienteControllerService} from "../../../../core/services/api-client/services/paciente-controller.service";
import {DoctorControllerService} from "../../../../core/services/api-client/services/doctor-controller.service";
import {Persona} from "../../../../core/services/api-client/models/persona";
import {getUserFromLocalStorage} from "../../../../core/guards/auth.guard";
import {DoctorRes} from "../../../../core/services/api-client/models/doctor-res";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  persona!:Persona | undefined;


  constructor(
    private _pacienteService:PacienteControllerService,
    private _doctorService:DoctorControllerService
    ) {}

  ngOnInit(): void {
    const usuario = getUserFromLocalStorage();
    if(usuario.rol ==='PACIENTE'){
      this._pacienteService.obtenerPaciente({id:usuario.entidadId}).subscribe({
        next: paciente => this.persona = paciente.persona
      })
    }
    else{
      this._doctorService.obtenerDoctor({id:usuario.entidadId}).subscribe({
        next: doctor => this.persona = <DoctorRes> (doctor.persona)
      })
    }

  }


}
