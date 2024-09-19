/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import {TurnoRes} from '../../models/turno-res';

export interface ObtenerTurnoPorPaciente$Params {
  idPaciente: number;
}

export function obtenerTurnoPorPaciente(http: HttpClient, rootUrl: string, params: ObtenerTurnoPorPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TurnoRes>>> {
  const rb = new RequestBuilder(rootUrl, obtenerTurnoPorPaciente.PATH, 'get');
  if (params) {
    rb.path('idPaciente', params.idPaciente, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TurnoRes>>;
    })
  );
}

obtenerTurnoPorPaciente.PATH = '/turnos/pacientes/{idPaciente}';
