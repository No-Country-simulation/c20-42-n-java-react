/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {PacienteRes} from '../../models/paciente-res';

export interface ObtenerPacientes1$Params {
  id: number;
}

export function obtenerPacientes1(http: HttpClient, rootUrl: string, params: ObtenerPacientes1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PacienteRes>>> {
  const rb = new RequestBuilder(rootUrl, obtenerPacientes1.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PacienteRes>>;
    })
  );
}

obtenerPacientes1.PATH = '/doctores/{id}/pacientes';