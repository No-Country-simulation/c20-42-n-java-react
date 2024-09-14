/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { HistoriaClinicaRes } from '../models/historia-clinica-res';
import { obtenerHistorial } from '../fn/historia-clinica-controller/obtener-historial';
import { ObtenerHistorial$Params } from '../fn/historia-clinica-controller/obtener-historial';

@Injectable({ providedIn: 'root' })
export class HistoriaClinicaControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerHistorial()` */
  static readonly ObtenerHistorialPath = '/pacientes/{paciendId}/historia-clinica';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerHistorial()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerHistorial$Response(params: ObtenerHistorial$Params, context?: HttpContext): Observable<StrictHttpResponse<HistoriaClinicaRes>> {
    return obtenerHistorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerHistorial$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerHistorial(params: ObtenerHistorial$Params, context?: HttpContext): Observable<HistoriaClinicaRes> {
    return this.obtenerHistorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<HistoriaClinicaRes>): HistoriaClinicaRes => r.body)
    );
  }

}
