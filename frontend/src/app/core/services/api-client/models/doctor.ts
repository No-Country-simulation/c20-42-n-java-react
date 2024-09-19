/* tslint:disable */
/* eslint-disable */
import { Especialidad } from '../models/especialidad';
import { Paciente } from '../models/paciente';
import { Persona } from '../models/persona';
export interface Doctor {
  especialidad?: Especialidad;
  honorarios?: number;
  id?: number;
  licencia?: string;
  pacientes?: Array<Paciente>;
  persona?: Persona;
}
