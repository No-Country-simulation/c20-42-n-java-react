/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { crearHistorial } from '../fn/historia-clinica-controller/crear-historial';
import { CrearHistorial$Params } from '../fn/historia-clinica-controller/crear-historial';
import { editarHistorial } from '../fn/historia-clinica-controller/editar-historial';
import { EditarHistorial$Params } from '../fn/historia-clinica-controller/editar-historial';
import { eliminarHistorial } from '../fn/historia-clinica-controller/eliminar-historial';
import { EliminarHistorial$Params } from '../fn/historia-clinica-controller/eliminar-historial';
import { HistoriaClinicaRes } from '../models/historia-clinica-res';
import { obtenerHistorial } from '../fn/historia-clinica-controller/obtener-historial';
import { ObtenerHistorial$Params } from '../fn/historia-clinica-controller/obtener-historial';
import { obtenerTodoLosHistoriales } from '../fn/historia-clinica-controller/obtener-todo-los-historiales';
import { ObtenerTodoLosHistoriales$Params } from '../fn/historia-clinica-controller/obtener-todo-los-historiales';

@Injectable({ providedIn: 'root' })
export class HistoriaClinicaControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerHistorial()` */
  static readonly ObtenerHistorialPath = '/historial/{id}';

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

  /** Path part for operation `editarHistorial()` */
  static readonly EditarHistorialPath = '/historial/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarHistorial()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarHistorial$Response(params: EditarHistorial$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return editarHistorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarHistorial$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarHistorial(params: EditarHistorial$Params, context?: HttpContext): Observable<string> {
    return this.editarHistorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `eliminarHistorial()` */
  static readonly EliminarHistorialPath = '/historial/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarHistorial()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarHistorial$Response(params: EliminarHistorial$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return eliminarHistorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarHistorial$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarHistorial(params: EliminarHistorial$Params, context?: HttpContext): Observable<string> {
    return this.eliminarHistorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `obtenerTodoLosHistoriales()` */
  static readonly ObtenerTodoLosHistorialesPath = '/historial';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerTodoLosHistoriales()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTodoLosHistoriales$Response(params?: ObtenerTodoLosHistoriales$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HistoriaClinicaRes>>> {
    return obtenerTodoLosHistoriales(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerTodoLosHistoriales$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTodoLosHistoriales(params?: ObtenerTodoLosHistoriales$Params, context?: HttpContext): Observable<Array<HistoriaClinicaRes>> {
    return this.obtenerTodoLosHistoriales$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HistoriaClinicaRes>>): Array<HistoriaClinicaRes> => r.body)
    );
  }

  /** Path part for operation `crearHistorial()` */
  static readonly CrearHistorialPath = '/historial';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `crearHistorial()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearHistorial$Response(params: CrearHistorial$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return crearHistorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `crearHistorial$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearHistorial(params: CrearHistorial$Params, context?: HttpContext): Observable<void> {
    return this.crearHistorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
