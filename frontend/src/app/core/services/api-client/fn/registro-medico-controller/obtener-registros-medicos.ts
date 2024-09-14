/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {RegistroMedico} from '../../models/registro-medico';

export interface ObtenerRegistrosMedicos$Params {
  pacienteId: number;
}

export function obtenerRegistrosMedicos(http: HttpClient, rootUrl: string, params: ObtenerRegistrosMedicos$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RegistroMedico>>> {
  const rb = new RequestBuilder(rootUrl, obtenerRegistrosMedicos.PATH, 'get');
  if (params) {
    rb.path('pacienteId', params.pacienteId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RegistroMedico>>;
    })
  );
}

obtenerRegistrosMedicos.PATH = '/pacientes/{pacienteId}/historia-clinica/registros-medicos';
