import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DoctorRes,
  Especialidad,
} from '../../../core/services/api-client/models';
import {
  DoctorControllerService,
  EspecialidadControllerService,
  TurnoControllerService,
} from '../../../core/services/api-client/services';
import { Router } from '@angular/router';
import { getUserFromLocalStorage } from '../../../core/guards/auth.guard';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.css',
})
export class TurnosComponent implements OnInit {
  registroForm!: FormGroup;
  especialidades?: Especialidad[] = [];
  doctores?: DoctorRes[];

  submittedData: any = null; // Aquí se guardarán los datos del formulario

  constructor(
    private _especialidadService: EspecialidadControllerService,
    private _doctorService: DoctorControllerService,
    private _router: Router,
    private _turnoService: TurnoControllerService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._especialidadService.obtenerEspecialidad().subscribe({
      next: (value) => {
        this.especialidades = value;
      },
    });

    this.registroForm = this._fb.group({
      doctor: ['', Validators.required],
      especialidad: ['', Validators.required],
      fechaHora: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.submittedData = this.registroForm.value;

      const { doctor, fechaHora } = this.registroForm.value;
      const pacienteId = getUserFromLocalStorage().entidadId;
      
      console.log('Datos del formulario:', this.submittedData);

      this._turnoService
        .agendarTurno({
          body: {
            doctorId: doctor,
            fechaHora: fechaHora,
            pacienteId: pacienteId,
          },
        })
        .subscribe({
          next: () => {
            this._router.navigate(['/perfil']);
            alert('Turno agendado exitosamente');
          },
          error: (err) => console.error('Error al agendar turno:', err),
        });
    } else {
      alert('Se te olvidó completar un campo!');
    }
  }

  obtenerDoctores() {
    const especialidadId = this.registroForm.controls['especialidad'].value;

    if (especialidadId) {
      this._doctorService
        .obtenerDoctores({ especialidad: especialidadId })
        .subscribe({
          next: (doctores) => (this.doctores = doctores),
          error: (err) => console.error('Error fetching doctores:', err),
        });
    } else {
      this.doctores = []; // Si no hay especialidad seleccionada, se vacía la lista de doctores
    }
  }
}
