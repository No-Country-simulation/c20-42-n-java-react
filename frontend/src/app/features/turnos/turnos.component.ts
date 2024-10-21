import {Component, OnInit} from '@angular/core';
import {EspecialidadControllerService} from "../../core/services/api-client/services/especialidad-controller.service";
import {Especialidad} from "../../core/services/api-client/models/especialidad";
import {DoctorRes} from "../../core/services/api-client/models/doctor-res";
import {DoctorControllerService} from "../../core/services/api-client/services/doctor-controller.service";
import {Router} from "@angular/router";
import {TurnoControllerService} from "../../core/services/api-client/services/turno-controller.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {getUserFromLocalStorage} from "../../core/guards/auth.guard";

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.css'
})
export class TurnosComponent implements OnInit{
  registroForm!: FormGroup;
  especialidades?: Especialidad[] = [];
  doctores?: DoctorRes[];

  constructor(
    private _especialidadService : EspecialidadControllerService,
    private _doctorService: DoctorControllerService,
    private _router:Router,
    private _turnoService:TurnoControllerService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._especialidadService.obtenerEspecialidad().subscribe({
      next: (value) => {
        this.especialidades = value;
      }
    });

    this.registroForm = this._fb.group({
      doctor: ['', Validators.required],
      especialidad: ['', Validators.required],
      fechaHora: ['', Validators.required]
    });

  }

  onSubmit(){
    if(this.registroForm.valid){
      const controls = this.registroForm.controls;
      this._turnoService.agendarTurno({
        body:{
          doctorId: controls['doctor'].value,
          fechaHora: controls['fechaHora'].value,
          pacienteId: getUserFromLocalStorage().entidadId,
        }
      }).subscribe({
        next: (value) => {
          this._router.navigate(['/perfil']);
        }
      })
      alert("Turno agendado exitosamente");
    }
    else
      alert("Se te olvidó completar un campo!")

  }
  obtenerDoctores(){
    this._doctorService.obtenerDoctores({especialidad: this.registroForm.controls['especialidad'].value}).subscribe({
      next: doctores => this.doctores = doctores
    })
  }


}
