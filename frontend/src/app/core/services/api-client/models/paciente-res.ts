/* tslint:disable */
/* eslint-disable */
import { HistoriaClinicaRes } from '../models/historia-clinica-res';
import { Persona } from '../models/persona';
export interface PacienteRes {
  historiaClinica?: HistoriaClinicaRes;
  id?: number;
  persona?: Persona;
}
