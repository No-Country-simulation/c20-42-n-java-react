/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { crearDoctor } from '../fn/doctor-controller/crear-doctor';
import { CrearDoctor$Params } from '../fn/doctor-controller/crear-doctor';
import { DoctorRes } from '../models/doctor-res';
import { editarDoctor } from '../fn/doctor-controller/editar-doctor';
import { EditarDoctor$Params } from '../fn/doctor-controller/editar-doctor';
import { eliminarDoctor } from '../fn/doctor-controller/eliminar-doctor';
import { EliminarDoctor$Params } from '../fn/doctor-controller/eliminar-doctor';
import { obtenerDoctor } from '../fn/doctor-controller/obtener-doctor';
import { ObtenerDoctor$Params } from '../fn/doctor-controller/obtener-doctor';
import { obtenerDoctores } from '../fn/doctor-controller/obtener-doctores';
import { ObtenerDoctores$Params } from '../fn/doctor-controller/obtener-doctores';

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
  obtenerDoctor$Response(params: ObtenerDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return obtenerDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerDoctor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerDoctor(params: ObtenerDoctor$Params, context?: HttpContext): Observable<void> {
    return this.obtenerDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
  obtenerDoctores$Response(params: ObtenerDoctores$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DoctorRes>>> {
    return obtenerDoctores(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerDoctores$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerDoctores(params: ObtenerDoctores$Params, context?: HttpContext): Observable<Array<DoctorRes>> {
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

}
