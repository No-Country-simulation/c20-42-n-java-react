/* tslint:disable */
/* eslint-disable */
import { Paciente } from './paciente';
import { RegistroMedico } from './registro-medico';
export interface HistoriaClinica {
  id?: number;
  paciente?: Paciente;
  registroMedicos?: Array<RegistroMedico>;
}
