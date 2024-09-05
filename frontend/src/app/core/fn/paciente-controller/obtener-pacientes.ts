/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Paciente } from '../../models/paciente';

export interface ObtenerPacientes$Params {
}

export function obtenerPacientes(http: HttpClient, rootUrl: string, params?: ObtenerPacientes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Paciente>>> {
  const rb = new RequestBuilder(rootUrl, obtenerPacientes.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Paciente>>;
    })
  );
}

obtenerPacientes.PATH = '/pacientes';
