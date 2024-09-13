/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Especialidad } from '../../models/especialidad';

export interface ObtenerEspecialidad$Params {
}

export function obtenerEspecialidad(http: HttpClient, rootUrl: string, params?: ObtenerEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Especialidad>>> {
  const rb = new RequestBuilder(rootUrl, obtenerEspecialidad.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Especialidad>>;
    })
  );
}

obtenerEspecialidad.PATH = '/especialidades';
