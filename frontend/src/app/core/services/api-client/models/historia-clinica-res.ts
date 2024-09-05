/* tslint:disable */
/* eslint-disable */
import {RegistroMedico} from '../models/registro-medico';

export interface HistoriaClinicaRes {
  id?: number;
  pacienteId?: number;
  registroMedicos?: Array<RegistroMedico>;
}
