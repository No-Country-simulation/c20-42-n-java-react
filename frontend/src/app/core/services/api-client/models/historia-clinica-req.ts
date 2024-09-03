/* tslint:disable */
/* eslint-disable */
import { RegistroMedicoReq } from '../models/registro-medico-req';
export interface HistoriaClinicaReq {
  pacienteId: number;
  registroMedicos?: Array<RegistroMedicoReq>;
}
