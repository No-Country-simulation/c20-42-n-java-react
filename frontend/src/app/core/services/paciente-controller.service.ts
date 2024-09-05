/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { crearPaciente } from '../fn/paciente-controller/crear-paciente';
import { CrearPaciente$Params } from '../fn/paciente-controller/crear-paciente';
import { editarPaciente } from '../fn/paciente-controller/editar-paciente';
import { EditarPaciente$Params } from '../fn/paciente-controller/editar-paciente';
import { eliminarPaciente } from '../fn/paciente-controller/eliminar-paciente';
import { EliminarPaciente$Params } from '../fn/paciente-controller/eliminar-paciente';
import { obtenerPaciente } from '../fn/paciente-controller/obtener-paciente';
import { ObtenerPaciente$Params } from '../fn/paciente-controller/obtener-paciente';
import { obtenerPacientes } from '../fn/paciente-controller/obtener-pacientes';
import { ObtenerPacientes$Params } from '../fn/paciente-controller/obtener-pacientes';
import { Paciente } from '../models/paciente';

@Injectable({ providedIn: 'root' })
export class PacienteControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerPaciente()` */
  static readonly ObtenerPacientePath = '/pacientes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerPaciente()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerPaciente$Response(params: ObtenerPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<Paciente>> {
    return obtenerPaciente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerPaciente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerPaciente(params: ObtenerPaciente$Params, context?: HttpContext): Observable<Paciente> {
    return this.obtenerPaciente$Response(params, context).pipe(
      map((r: StrictHttpResponse<Paciente>): Paciente => r.body)
    );
  }

  /** Path part for operation `editarPaciente()` */
  static readonly EditarPacientePath = '/pacientes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarPaciente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarPaciente$Response(params: EditarPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return editarPaciente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarPaciente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarPaciente(params: EditarPaciente$Params, context?: HttpContext): Observable<string> {
    return this.editarPaciente$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `eliminarPaciente()` */
  static readonly EliminarPacientePath = '/pacientes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarPaciente()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarPaciente$Response(params: EliminarPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return eliminarPaciente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarPaciente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarPaciente(params: EliminarPaciente$Params, context?: HttpContext): Observable<string> {
    return this.eliminarPaciente$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `obtenerPacientes()` */
  static readonly ObtenerPacientesPath = '/pacientes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerPacientes()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerPacientes$Response(params?: ObtenerPacientes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Paciente>>> {
    return obtenerPacientes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerPacientes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerPacientes(params?: ObtenerPacientes$Params, context?: HttpContext): Observable<Array<Paciente>> {
    return this.obtenerPacientes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Paciente>>): Array<Paciente> => r.body)
    );
  }

  /** Path part for operation `crearPaciente()` */
  static readonly CrearPacientePath = '/pacientes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `crearPaciente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearPaciente$Response(params: CrearPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return crearPaciente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `crearPaciente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearPaciente(params: CrearPaciente$Params, context?: HttpContext): Observable<string> {
    return this.crearPaciente$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
