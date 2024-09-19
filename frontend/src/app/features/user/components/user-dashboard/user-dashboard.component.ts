import {Component, OnInit} from '@angular/core';
import {PacienteControllerService} from "../../../../core/services/api-client/services/paciente-controller.service";
import {DoctorControllerService} from "../../../../core/services/api-client/services/doctor-controller.service";
import {Persona} from "../../../../core/services/api-client/models/persona";
import {getUserFromLocalStorage} from "../../../../core/guards/auth.guard";
import {DoctorRes} from "../../../../core/services/api-client/models/doctor-res";
import {TurnoRes} from "../../../../core/services/api-client/models/turno-res";
import {TurnoControllerService} from "../../../../core/services/api-client/services/turno-controller.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  persona!:Persona | undefined;
  usuario: any;
  turnos!: TurnoRes[];

  constructor(
    private _pacienteService:PacienteControllerService,
    private _doctorService:DoctorControllerService,
    private _turnoService: TurnoControllerService
    ) {}

  ngOnInit(): void {
    this.usuario = getUserFromLocalStorage();
    if(this.usuario.rol ==='PACIENTE'){
      this._pacienteService.obtenerPaciente({id:this.usuario.entidadId}).subscribe({
        next: paciente => this.persona = paciente.persona
      });
      this._turnoService.obtenerTurnoPorPaciente({idPaciente:this.usuario.entidadId}).subscribe({
        next: turnos => this.turnos = turnos
      })
    }
    else{
      this._doctorService.obtenerDoctor({id:this.usuario.entidadId}).subscribe({
        next: doctor => this.persona = <DoctorRes> (doctor.persona)
      })

    }

  }


  protected readonly Date = Date;
}
