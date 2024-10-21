import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PacienteControllerService} from "../../../../core/services/api-client/services/paciente-controller.service";
import {DoctorControllerService} from "../../../../core/services/api-client/services/doctor-controller.service";
import {Persona} from "../../../../core/services/api-client/models/persona";
import {getUserFromLocalStorage} from "../../../../core/guards/auth.guard";
import {DoctorRes} from "../../../../core/services/api-client/models/doctor-res";
import {TurnoRes} from "../../../../core/services/api-client/models/turno-res";
import {TurnoControllerService} from "../../../../core/services/api-client/services/turno-controller.service";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {StorageService} from "../../../../core/services/storage-service/storage.service";
import {PacienteRes} from "../../../../core/services/api-client/models/paciente-res";
import {PersonaReq} from "../../../../core/services/api-client/models/persona-req";
import {DoctorReq} from "../../../../core/services/api-client/models/doctor-req";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  persona!:Persona;
  usuario: any;
  turnos!: TurnoRes[];
  paciente?:PacienteRes;
  doctor?:DoctorRes;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private _pacienteService:PacienteControllerService,
    private _doctorService:DoctorControllerService,
    private _turnoService: TurnoControllerService,
    private _storageService: StorageService
    ) {}

  ngOnInit(): void {
    this.usuario = getUserFromLocalStorage();
    if(this.usuario.rol ==='PACIENTE'){
      this._pacienteService.obtenerPaciente({id:this.usuario.entidadId}).subscribe({
        next: paciente => {
          this.persona = paciente.persona!;
          this.paciente = paciente;
        }
      });
      this._turnoService.obtenerTurnoPorPaciente({idPaciente:this.usuario.entidadId}).subscribe({
        next: turnos => this.turnos = turnos
      })
    }
    else{
      this._doctorService.obtenerDoctor({id:this.usuario.entidadId}).subscribe({
        next: doctor => {
          this.persona = doctor.persona!;
          this.doctor = doctor;
        }
      })
    }

  }

  triggerFileInput(){
    this.fileInput.nativeElement.click();
  }

  saveFile(){
    const file = this.fileInput.nativeElement.files[0];
    this._storageService.uploadFile(file).pipe(
      switchMap(fileUrl => {
        this.persona!.fotoUrl = fileUrl;
        if(this.usuario.rol ==='PACIENTE'){
          return this._pacienteService.editarPaciente({
            id: this.paciente!.id!,
            body: {persona : this.persona as PersonaReq}
          });
        } else {
          return this._doctorService.editarDoctor({
            id: this.doctor!.id!,
            body: this.doctor as DoctorReq
          });
        }
      })
    ).subscribe({
      next: value => console.log(this.persona)
    });
  }


  protected readonly faPenToSquare = faPenToSquare;
}
