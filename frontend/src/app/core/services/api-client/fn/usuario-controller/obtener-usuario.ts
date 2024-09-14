/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Usuario } from '../../models/usuario';

export interface ObtenerUsuario$Params {
}

export function obtenerUsuario(http: HttpClient, rootUrl: string, params?: ObtenerUsuario$Params, context?: HttpContext): Observable<StrictHttpResponse<Usuario>> {
  const rb = new RequestBuilder(rootUrl, obtenerUsuario.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Usuario>;
    })
  );
}

obtenerUsuario.PATH = '/usuarios';
