import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DoctorRes, Especialidad} from '../../../core/services/api-client/models';
import {
  DoctorControllerService,
  EspecialidadControllerService,
  TurnoControllerService
} from '../../../core/services/api-client/services';
import {Router} from '@angular/router';
import {getUserFromLocalStorage} from '../../../core/guards/auth.guard';


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
