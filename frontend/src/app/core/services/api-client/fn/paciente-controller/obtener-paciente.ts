/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PacienteRes } from '../../models/paciente-res';

export interface ObtenerPaciente$Params {
  id: number;
}

export function obtenerPaciente(http: HttpClient, rootUrl: string, params: ObtenerPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<PacienteRes>> {
  const rb = new RequestBuilder(rootUrl, obtenerPaciente.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacienteRes>;
    })
  );
}

obtenerPaciente.PATH = '/pacientes/{id}';
