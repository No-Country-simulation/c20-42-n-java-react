/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistroMedicoRes } from '../../models/registro-medico-res';

export interface ObtenerRegistroMedico$Params {
  pacienteId: number;
  id: number;
}

export function obtenerRegistroMedico(http: HttpClient, rootUrl: string, params: ObtenerRegistroMedico$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistroMedicoRes>> {
  const rb = new RequestBuilder(rootUrl, obtenerRegistroMedico.PATH, 'get');
  if (params) {
    rb.path('pacienteId', params.pacienteId, {});
    rb.path('id', params.id, {});
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

obtenerRegistroMedico.PATH = '/pacientes/{pacienteId}/historia-clinica/registros-medicos/{id}';
