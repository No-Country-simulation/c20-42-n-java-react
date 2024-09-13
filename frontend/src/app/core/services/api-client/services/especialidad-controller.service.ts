/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { crearEspecialidad } from '../fn/especialidad-controller/crear-especialidad';
import { CrearEspecialidad$Params } from '../fn/especialidad-controller/crear-especialidad';
import { editarEspecialidad } from '../fn/especialidad-controller/editar-especialidad';
import { EditarEspecialidad$Params } from '../fn/especialidad-controller/editar-especialidad';
import { eliminarEspecialidad } from '../fn/especialidad-controller/eliminar-especialidad';
import { EliminarEspecialidad$Params } from '../fn/especialidad-controller/eliminar-especialidad';
import { Especialidad } from '../models/especialidad';
import { obtenerEspecialidad } from '../fn/especialidad-controller/obtener-especialidad';
import { ObtenerEspecialidad$Params } from '../fn/especialidad-controller/obtener-especialidad';
import { obtenerEspecialidad1 } from '../fn/especialidad-controller/obtener-especialidad-1';
import { ObtenerEspecialidad1$Params } from '../fn/especialidad-controller/obtener-especialidad-1';

@Injectable({ providedIn: 'root' })
export class EspecialidadControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerEspecialidad1()` */
  static readonly ObtenerEspecialidad1Path = '/especialidades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerEspecialidad1()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEspecialidad1$Response(params: ObtenerEspecialidad1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return obtenerEspecialidad1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerEspecialidad1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEspecialidad1(params: ObtenerEspecialidad1$Params, context?: HttpContext): Observable<void> {
    return this.obtenerEspecialidad1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `editarEspecialidad()` */
  static readonly EditarEspecialidadPath = '/especialidades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarEspecialidad()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarEspecialidad$Response(params: EditarEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<Especialidad>> {
    return editarEspecialidad(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarEspecialidad$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarEspecialidad(params: EditarEspecialidad$Params, context?: HttpContext): Observable<Especialidad> {
    return this.editarEspecialidad$Response(params, context).pipe(
      map((r: StrictHttpResponse<Especialidad>): Especialidad => r.body)
    );
  }

  /** Path part for operation `eliminarEspecialidad()` */
  static readonly EliminarEspecialidadPath = '/especialidades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarEspecialidad()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarEspecialidad$Response(params: EliminarEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return eliminarEspecialidad(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarEspecialidad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarEspecialidad(params: EliminarEspecialidad$Params, context?: HttpContext): Observable<string> {
    return this.eliminarEspecialidad$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `obtenerEspecialidad()` */
  static readonly ObtenerEspecialidadPath = '/especialidades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerEspecialidad()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEspecialidad$Response(params?: ObtenerEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Especialidad>>> {
    return obtenerEspecialidad(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerEspecialidad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEspecialidad(params?: ObtenerEspecialidad$Params, context?: HttpContext): Observable<Array<Especialidad>> {
    return this.obtenerEspecialidad$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Especialidad>>): Array<Especialidad> => r.body)
    );
  }

  /** Path part for operation `crearEspecialidad()` */
  static readonly CrearEspecialidadPath = '/especialidades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `crearEspecialidad()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearEspecialidad$Response(params: CrearEspecialidad$Params, context?: HttpContext): Observable<StrictHttpResponse<Especialidad>> {
    return crearEspecialidad(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `crearEspecialidad$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearEspecialidad(params: CrearEspecialidad$Params, context?: HttpContext): Observable<Especialidad> {
    return this.crearEspecialidad$Response(params, context).pipe(
      map((r: StrictHttpResponse<Especialidad>): Especialidad => r.body)
    );
  }

}
