/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import {TurnoRes} from '../../models/turno-res';

export interface ObtenerTurnoPorDoctor$Params {
  idDoctor: number;
}

export function obtenerTurnoPorDoctor(http: HttpClient, rootUrl: string, params: ObtenerTurnoPorDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TurnoRes>>> {
  const rb = new RequestBuilder(rootUrl, obtenerTurnoPorDoctor.PATH, 'get');
  if (params) {
    rb.path('idDoctor', params.idDoctor, {});
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

obtenerTurnoPorDoctor.PATH = '/turnos/doctores/{idDoctor}';
