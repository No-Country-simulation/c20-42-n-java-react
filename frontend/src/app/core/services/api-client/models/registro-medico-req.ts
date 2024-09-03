/* tslint:disable */
/* eslint-disable */
export interface RegistroMedicoReq {
  diagnostico: string;
  doctorId: number;
  fecha: string;
  motivoDeLaConsulta: string;
  observaciones: string;
  seguimiento: string;
  sintomas: Array<string>;
  tratamiento: string;
}
