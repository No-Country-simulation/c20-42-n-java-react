import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RegistroMedicoControllerService } from '../../core/services/api-client/services';
import { RegistroMedicoReq } from '../../core/services/api-client/models';

@Component({
  selector: 'app-consulta-medica',
  templateUrl: './consulta-medica.component.html',
  styleUrl: './consulta-medica.component.css',
})
export class ConsultaMedicaComponent implements OnInit {
  consultaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registroMedicoService: RegistroMedicoControllerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    if (this.consultaForm.valid) {
      const controls = this.consultaForm.controls;
      const usuario = this.getUserFromLocalStorage();

      const registroMedico: RegistroMedicoReq = {

        doctorId: usuario.doctorId,
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
        pacienteId: 23131
      }).subscribe(response => {
        console.log('Registro médico creado:', response);
      });
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

  private initializeForm(): void {
    this.consultaForm = this.fb.group({
      doctorId: [0, Validators.required],
      motivo: ['', Validators.required],
      sintomas: this.fb.array([this.fb.control('')], Validators.required),
      diagnostico: ['', Validators.required],
      expediente: ['', Validators.required],
      tratamiento: ['', Validators.required],
      seguimiento: ['', Validators.required],
      observaciones: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  get sintomas() {
    return this.consultaForm.get('sintomas') as FormArray;
  }

  addSintoma() {
    this.sintomas.push(this.fb.control(''));
  }

  removeSintoma(index: number) {
    this.sintomas.removeAt(index);
  }

  editSintoma(index: number) {
    const sintoma = this.sintomas.at(index).value;
    console.log(`Editar síntoma en el índice ${index}: ${sintoma}`);
  }



}
