/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {Especialidad} from '../../models/especialidad';
import {EspecialidadReq} from '../../models/especialidad-req';

export interface CrearEspecialidad$Params {
      body: EspecialidadReq
}

export function crearEspecialidad(http: HttpClient, rootUrl: string, params: CrearEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<Especialidad>> {
  const rb = new RequestBuilder(rootUrl, crearEspecialidad.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Especialidad>;
    })
  );
}

crearEspecialidad.PATH = '/especialidades';
