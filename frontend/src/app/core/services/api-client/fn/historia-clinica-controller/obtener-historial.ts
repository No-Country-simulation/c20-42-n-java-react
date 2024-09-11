/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HistoriaClinicaRes } from '../../models/historia-clinica-res';

export interface ObtenerHistorial$Params {
  id: number;
}

export function obtenerHistorial(http: HttpClient, rootUrl: string, params: ObtenerHistorial$Params, context?: HttpContext): Observable<StrictHttpResponse<HistoriaClinicaRes>> {
  const rb = new RequestBuilder(rootUrl, obtenerHistorial.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HistoriaClinicaRes>;
    })
  );
}

obtenerHistorial.PATH = '/historial/{id}';
