/**
 * Telemedicina API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {PersonaReq} from './personaReq';


export interface DoctorReq {
    persona?: PersonaReq;
    licencia: string;
    honorarios: number;
    especialidadId: number;
    descripcion?: string;
}

