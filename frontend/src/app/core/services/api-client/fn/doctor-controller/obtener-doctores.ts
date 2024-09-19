/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import {DoctorRes} from '../../models/doctor-res';

export interface ObtenerDoctores$Params {

/**
 * ID de la especialidad
 */
  especialidad?: any;

/**
 * Nombre del doctor
 */
  nombre?: any;
}

export function obtenerDoctores(http: HttpClient, rootUrl: string, params?: ObtenerDoctores$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DoctorRes>>> {
  const rb = new RequestBuilder(rootUrl, obtenerDoctores.PATH, 'get');
  if (params) {
    rb.query('especialidad', params.especialidad, {});
    rb.query('nombre', params.nombre, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DoctorRes>>;
    })
  );
}

obtenerDoctores.PATH = '/doctores';
