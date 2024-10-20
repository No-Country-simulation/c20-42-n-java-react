/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import {HttpClient, HttpContext} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';

import {crearDoctor, CrearDoctor$Params} from '../fn/doctor-controller/crear-doctor';
import {DoctorRes} from '../models/doctor-res';
import {editarDoctor, EditarDoctor$Params} from '../fn/doctor-controller/editar-doctor';
import {eliminarDoctor, EliminarDoctor$Params} from '../fn/doctor-controller/eliminar-doctor';
import {obtenerDoctor, ObtenerDoctor$Params} from '../fn/doctor-controller/obtener-doctor';
import {obtenerDoctores, ObtenerDoctores$Params} from '../fn/doctor-controller/obtener-doctores';
import {obtenerPacientes1, ObtenerPacientes1$Params} from '../fn/doctor-controller/obtener-pacientes-1';
import {PacienteRes} from '../models/paciente-res';
import {ObtenerPaciente$Params} from "../fn/paciente-controller/obtener-paciente";

@Injectable({ providedIn: 'root' })
export class DoctorControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerDoctor()` */
  static readonly ObtenerDoctorPath = '/doctores/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerDoctor()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerDoctor$Response(params: ObtenerDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<DoctorRes>> {
    return obtenerDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerPaciente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerDoctor(params: ObtenerDoctor$Params, context?: HttpContext): Observable<DoctorRes> {
    return this.obtenerDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<DoctorRes>): DoctorRes => r.body)
    );
  }

  /** Path part for operation `editarDoctor()` */
  static readonly EditarDoctorPath = '/doctores/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarDoctor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarDoctor$Response(params: EditarDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<DoctorRes>> {
    return editarDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarDoctor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarDoctor(params: EditarDoctor$Params, context?: HttpContext): Observable<DoctorRes> {
    return this.editarDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<DoctorRes>): DoctorRes => r.body)
    );
  }

  /** Path part for operation `eliminarDoctor()` */
  static readonly EliminarDoctorPath = '/doctores/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarDoctor()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarDoctor$Response(params: EliminarDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return eliminarDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarDoctor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarDoctor(params: EliminarDoctor$Params, context?: HttpContext): Observable<string> {
    return this.eliminarDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `obtenerDoctores()` */
  static readonly ObtenerDoctoresPath = '/doctores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerDoctores()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerDoctores$Response(params?: ObtenerDoctores$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DoctorRes>>> {
    return obtenerDoctores(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerDoctores$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerDoctores(params?: ObtenerDoctores$Params, context?: HttpContext): Observable<Array<DoctorRes>> {
    return this.obtenerDoctores$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DoctorRes>>): Array<DoctorRes> => r.body)
    );
  }

  /** Path part for operation `crearDoctor()` */
  static readonly CrearDoctorPath = '/doctores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `crearDoctor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearDoctor$Response(params: CrearDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<DoctorRes>> {
    return crearDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `crearDoctor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearDoctor(params: CrearDoctor$Params, context?: HttpContext): Observable<DoctorRes> {
    return this.crearDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<DoctorRes>): DoctorRes => r.body)
    );
  }

  /** Path part for operation `obtenerPacientes1()` */
  static readonly ObtenerPacientes1Path = '/doctores/{id}/pacientes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerPacientes1()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerPacientes1$Response(params: ObtenerPacientes1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PacienteRes>>> {
    return obtenerPacientes1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerPacientes1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerPacientes1(params: ObtenerPacientes1$Params, context?: HttpContext): Observable<Array<PacienteRes>> {
    return this.obtenerPacientes1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PacienteRes>>): Array<PacienteRes> => r.body)
    );
  }

}
