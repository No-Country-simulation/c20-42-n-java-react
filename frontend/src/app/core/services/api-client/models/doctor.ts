/* tslint:disable */
/* eslint-disable */
import { Especialidad } from './especialidad';
import { Paciente } from './paciente';
import { Persona } from './persona';
export interface Doctor {
  especialidad?: Especialidad;
  honorarios?: number;
  id?: number;
  licencia?: string;
  pacientes?: Array<Paciente>;
  persona?: Persona;
}
