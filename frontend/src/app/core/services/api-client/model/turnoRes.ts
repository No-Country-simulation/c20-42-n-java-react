/**
 * Telemedicina API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {PacienteRes} from './pacienteRes';
import {DoctorRes} from './doctorRes';


export interface TurnoRes {
    id?: number;
    doctor?: DoctorRes;
    paciente?: PacienteRes;
    fechaHora?: string;
    estadoTurno?: TurnoRes.EstadoTurnoEnum;
}
export namespace TurnoRes {
    export type EstadoTurnoEnum = 'PENDIENTE' | 'CANCELADO' | 'COMPLETADO';
    export const EstadoTurnoEnum = {
        Pendiente: 'PENDIENTE' as EstadoTurnoEnum,
        Cancelado: 'CANCELADO' as EstadoTurnoEnum,
        Completado: 'COMPLETADO' as EstadoTurnoEnum
    };
}

