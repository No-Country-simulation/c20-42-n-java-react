import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RegistroMedicoControllerService } from '../../../core/services/api-client/services';
import { RegistroMedicoReq } from '../../../core/services/api-client/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-medica',
  templateUrl: './consulta-medica.component.html',
  styleUrl: './consulta-medica.component.css',
})
export class ConsultaMedicaComponent implements OnInit {
  consultaForm!: FormGroup;
  paciente: any;

  constructor(
    private fb: FormBuilder,
    private registroMedicoService: RegistroMedicoControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    const pacienteData = localStorage.getItem('paciente');
    if (pacienteData) {
      this.paciente = JSON.parse(pacienteData);
      console.log(this.paciente);
    } else {
      console.warn('No se encontraron datos del paciente en el localStorage.');
    }
    
  }

  onSubmit() {
    if (this.consultaForm.valid) {
      const controls = this.consultaForm.controls;
      const usuario = this.getUserFromLocalStorage();
      const pacienteData = localStorage.getItem('paciente');
      const paciente = pacienteData ? JSON.parse(pacienteData) : null;
      console.log("usuario " + usuario.entidadId);
      console.log("paciente " + paciente.id);
      if (usuario && paciente) {
        const registroMedico: RegistroMedicoReq = {
          doctorId: usuario.entidadId,
          motivoDeLaConsulta: controls['motivo'].value,
          sintomas: controls['sintomas'].value,
          diagnostico: controls['diagnostico'].value,
          tratamiento: controls['tratamiento'].value,
          seguimiento: controls['seguimiento'].value,
          observaciones: controls['observaciones'].value,
          fecha: controls['fecha'].value, // O el valor adecuado para la fecha
        };
        console.log(registroMedico);
        this.registroMedicoService.crearRegistroMedico({
          body: registroMedico,
          pacienteId: paciente.id
        }).subscribe(response => {
          console.log('Registro médico creado:', response);
          // Redirigir a la página de pacientes
          this.router.navigate(['/pacientes']);
        });
      } else {
        console.warn('No se encontraron los datos del usuario o del paciente en el localStorage.');
      }
    }
  }


  getUserFromLocalStorage = () => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      try {
        const parsedUsuario = JSON.parse(usuario);
        return parsedUsuario.entidadId ? parsedUsuario : null;
      } catch (error) {
        console.error('Error parsing usuario from localStorage:', error);
        return null;
      }
    }
    return null;
  };
  
  getPacienteFromLocalStorage = () => {
    const paciente = localStorage.getItem('paciente');
    if (paciente) {
      try {
        const parsedPaciente = JSON.parse(paciente);
        return parsedPaciente.id ? parsedPaciente : null;
      } catch (error) {
        console.error('Error parsing paciente from localStorage:', error);
        return null;
      }
    }
    return null;
  };

  get sintomas(): FormArray {
    return this.consultaForm.get('sintomas') as FormArray;
  }

  addSintoma(): void {
    this.sintomas.push(this.fb.control('', Validators.required));
  }

  removeSintoma(index: number): void {
    this.sintomas.removeAt(index);
  }


  private initializeForm(): void {
    this.consultaForm = this.fb.group({
      motivo: ['', Validators.required],
      sintomas: this.fb.array([], Validators.required),
      diagnostico: ['', Validators.required],
      tratamiento: ['', Validators.required],
      seguimiento: ['', Validators.required],
      observaciones: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem('paciente');
    console.log('Datos del paciente eliminados del localStorage.');
  }

}
