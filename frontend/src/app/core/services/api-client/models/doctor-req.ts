/* tslint:disable */
/* eslint-disable */
import { PersonaReq } from '../models/persona-req';
export interface DoctorReq {
  especialidadId: number;
  honorarios: number;
  licencia: string;
  persona?: PersonaReq;
}
