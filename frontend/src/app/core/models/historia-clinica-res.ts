/* tslint:disable */
/* eslint-disable */
import { RegistroMedico } from './registro-medico';
export interface HistoriaClinicaRes {
  id?: number;
  pacienteId?: number;
  registroMedicos?: Array<RegistroMedico>;
}
