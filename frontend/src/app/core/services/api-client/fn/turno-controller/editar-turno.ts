/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import {TurnoReq} from '../../models/turno-req';
import {TurnoRes} from '../../models/turno-res';

export interface EditarTurno$Params {
  idTurno: number;
      body: TurnoReq
}

export function editarTurno(http: HttpClient, rootUrl: string, params: EditarTurno$Params, context?: HttpContext): Observable<StrictHttpResponse<TurnoRes>> {
  const rb = new RequestBuilder(rootUrl, editarTurno.PATH, 'put');
  if (params) {
    rb.path('idTurno', params.idTurno, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TurnoRes>;
    })
  );
}

editarTurno.PATH = '/turnos/{idTurno}';
