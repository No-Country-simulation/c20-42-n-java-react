/* tslint:disable */
/* eslint-disable */
import { Especialidad } from '../models/especialidad';
import { Paciente } from '../models/paciente';
import { Persona } from '../models/persona';
export interface Doctor {
  especialidad?: Especialidad;
  ganancias?: number;
  id?: number;
  numero_doctor?: number;
  paciente?: Array<Paciente>;
  persona?: Persona;
}
