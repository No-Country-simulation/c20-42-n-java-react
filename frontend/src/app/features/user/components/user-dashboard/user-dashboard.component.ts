import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {getUserFromLocalStorage} from "../../../../core/guards/auth.guard";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {StorageService} from "../../../../core/services/storage-service/storage.service";
import {switchMap} from "rxjs";
import {
  DoctorControllerService,
  DoctorReq,
  DoctorRes,
  PacienteControllerService,
  PacienteRes,
  Persona,
  PersonaReq,
  TurnoControllerService,
  TurnoRes
} from "../../../../core/services/api-client";

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
      this._pacienteService.obtenerPaciente(this.usuario.entidadId).subscribe({
        next: paciente => {
          this.persona = paciente.persona!;
          this.paciente = paciente;
        }
      });
      this._turnoService.obtenerTurnoPorPaciente(this.usuario.entidadId).subscribe({
        next: turnos => this.turnos = turnos
      })
    }
    else{
      this._doctorService.obtenerDoctor(this.usuario.entidadId).subscribe({
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
          return this._pacienteService.editarPaciente(
            this.paciente!.id!,
            {persona : this.persona as PersonaReq}
          );
        } else {
          return this._doctorService.editarDoctor(
            this.doctor!.id!,
            this.doctor as DoctorReq
          );
        }
      })
    ).subscribe({
      next: value => console.log(this.persona)
    });
  }


  protected readonly faPenToSquare = faPenToSquare;
}
