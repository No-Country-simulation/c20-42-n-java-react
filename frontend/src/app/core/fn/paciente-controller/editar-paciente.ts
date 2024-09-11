/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';
import { PacienteReq } from '../../services/api-client/models/paciente-req';
import { PacienteRes } from '../../services/api-client/models/paciente-res';


export interface EditarPaciente$Params {
  id: number;
      body: PacienteReq
}

export function editarPaciente(http: HttpClient, rootUrl: string, params: EditarPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<PacienteRes>> {
  const rb = new RequestBuilder(rootUrl, editarPaciente.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacienteRes>;
    })
  );
}

editarPaciente.PATH = '/pacientes/{id}';
