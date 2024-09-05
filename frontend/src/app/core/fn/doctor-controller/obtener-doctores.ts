/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';
import { DoctorRes } from '../../services/api-client/models/doctor-res';


export interface ObtenerDoctores$Params {
}

export function obtenerDoctores(http: HttpClient, rootUrl: string, params?: ObtenerDoctores$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DoctorRes>>> {
  const rb = new RequestBuilder(rootUrl, obtenerDoctores.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DoctorRes>>;
    })
  );
}

obtenerDoctores.PATH = '/doctores';
