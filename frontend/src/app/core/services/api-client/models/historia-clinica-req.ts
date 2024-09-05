/* tslint:disable */
/* eslint-disable */
import { RegistroMedicoReq } from './registro-medico-req';
export interface HistoriaClinicaReq {
  pacienteId: number;
  registroMedicos?: Array<RegistroMedicoReq>;
}
