/* tslint:disable */
/* eslint-disable */
import { Doctor } from '../models/doctor';
export interface RegistroMedico {
  diagnostico?: string;
  doctor?: Doctor;
  expediente?: string;
  fecha?: string;
  id?: number;
  motivoDeLaConsulta?: string;
  observaciones?: string;
  seguimiento?: string;
  sintomas?: Array<string>;
  tratamiento?: string;
}
