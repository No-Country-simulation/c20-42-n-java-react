/* tslint:disable */

import { PacienteReq } from "./paciente-req";

/* eslint-disable */
export interface TurnoDto {
  paciente: PacienteReq;
  doctorId: number;
  fechaHora: string;
  pacienteId: number;
}
