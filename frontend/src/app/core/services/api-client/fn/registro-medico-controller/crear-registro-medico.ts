/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistroMedicoReq } from '../../models/registro-medico-req';
import { RegistroMedicoRes } from '../../models/registro-medico-res';

export interface CrearRegistroMedico$Params {
  pacienteId: number;
      body: RegistroMedicoReq
}

export function crearRegistroMedico(http: HttpClient, rootUrl: string, params: CrearRegistroMedico$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistroMedicoRes>> {
  const rb = new RequestBuilder(rootUrl, crearRegistroMedico.PATH, 'post');
  if (params) {
    rb.path('pacienteId', params.pacienteId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistroMedicoRes>;
    })
  );
}

crearRegistroMedico.PATH = '/pacientes/{pacienteId}/historia-clinica/registros-medicos';
