/* tslint:disable */
/* eslint-disable */
import {HistoriaClinica} from '../models/historia-clinica';
import {Persona} from '../models/persona';

export interface Paciente {
  historiaClinica?: HistoriaClinica;
  id?: number;
  persona?: Persona;
}
