/**
 * Telemedicina API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {Persona} from './persona';
import {EspecialidadReq} from './especialidadReq';


export interface DoctorRes {
    id?: number;
    persona?: Persona;
    licencia?: string;
    honorarios?: number;
    especialidad?: EspecialidadReq;
    descripcion?: string;
}

