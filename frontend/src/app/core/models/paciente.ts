/* tslint:disable */
/* eslint-disable */
import { HistoriaClinica } from './historia-clinica';
import { Persona } from './persona';
export interface Paciente {
  historiaClinica?: HistoriaClinica;
  id?: number;
  persona?: Persona;
}
