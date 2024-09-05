/* tslint:disable */
/* eslint-disable */
import {Persona} from '../models/persona';

export interface DoctorRes {
  especialidadId?: number;
  honorarios?: number;
  id?: number;
  licencia?: string;
  persona?: Persona;
}
