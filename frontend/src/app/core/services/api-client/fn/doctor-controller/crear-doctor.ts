/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DoctorReq } from '../../models/doctor-req';
import { DoctorRes } from '../../models/doctor-res';

export interface CrearDoctor$Params {
      body: DoctorReq
}

export function crearDoctor(http: HttpClient, rootUrl: string, params: CrearDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<DoctorRes>> {
  const rb = new RequestBuilder(rootUrl, crearDoctor.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DoctorRes>;
    })
  );
}

crearDoctor.PATH = '/doctores';
