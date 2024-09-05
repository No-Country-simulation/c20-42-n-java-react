/* tslint:disable */
/* eslint-disable */
import { Especialidad } from './especialidad';
import { Paciente } from './paciente';
import { Persona } from './persona';
export interface Doctor {
  especialidad?: Especialidad;
  ganancias?: number;
  id?: number;
  numero_doctor?: number;
  paciente?: Array<Paciente>;
  persona?: Persona;
}
