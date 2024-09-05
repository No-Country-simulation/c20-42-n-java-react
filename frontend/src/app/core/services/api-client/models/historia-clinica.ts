/* tslint:disable */
/* eslint-disable */
import {Paciente} from '../models/paciente';
import {RegistroMedico} from '../models/registro-medico';

export interface HistoriaClinica {
  id?: number;
  paciente?: Paciente;
  registroMedicos?: Array<RegistroMedico>;
}
