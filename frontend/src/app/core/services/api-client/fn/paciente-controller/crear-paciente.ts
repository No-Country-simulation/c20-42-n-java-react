/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {PacienteReq} from '../../models/paciente-req';
import {PacienteRes} from '../../models/paciente-res';

export interface CrearPaciente$Params {
      body: PacienteReq
}

export function crearPaciente(http: HttpClient, rootUrl: string, params: CrearPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<PacienteRes>> {
  const rb = new RequestBuilder(rootUrl, crearPaciente.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

crearPaciente.PATH = '/pacientes';
