/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';
import { EspecialidadReq } from '../../services/api-client/models/especialidad-req';
import { Especialidad } from '../../services/api-client/models/especialidad';


export interface EditarEspecialidad$Params {
  id: number;
      body: EspecialidadReq
}

export function editarEspecialidad(http: HttpClient, rootUrl: string, params: EditarEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<Especialidad>> {
  const rb = new RequestBuilder(rootUrl, editarEspecialidad.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

editarEspecialidad.PATH = '/especialidades/{id}';
