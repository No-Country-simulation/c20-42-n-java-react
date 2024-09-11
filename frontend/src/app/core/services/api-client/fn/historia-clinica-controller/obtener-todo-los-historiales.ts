/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HistoriaClinicaRes } from '../../models/historia-clinica-res';

export interface ObtenerTodoLosHistoriales$Params {
}

export function obtenerTodoLosHistoriales(http: HttpClient, rootUrl: string, params?: ObtenerTodoLosHistoriales$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HistoriaClinicaRes>>> {
  const rb = new RequestBuilder(rootUrl, obtenerTodoLosHistoriales.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HistoriaClinicaRes>>;
    })
  );
}

obtenerTodoLosHistoriales.PATH = '/historial';
