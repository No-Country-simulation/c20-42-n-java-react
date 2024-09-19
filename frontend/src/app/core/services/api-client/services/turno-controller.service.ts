/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { agendarTurno } from '../fn/turno-controller/agendar-turno';
import { AgendarTurno$Params } from '../fn/turno-controller/agendar-turno';
import { editarTurno } from '../fn/turno-controller/editar-turno';
import { EditarTurno$Params } from '../fn/turno-controller/editar-turno';
import { eliminarTurno } from '../fn/turno-controller/eliminar-turno';
import { EliminarTurno$Params } from '../fn/turno-controller/eliminar-turno';
import { obtenerTurnoPorDoctor } from '../fn/turno-controller/obtener-turno-por-doctor';
import { ObtenerTurnoPorDoctor$Params } from '../fn/turno-controller/obtener-turno-por-doctor';
import { obtenerTurnoPorPaciente } from '../fn/turno-controller/obtener-turno-por-paciente';
import { ObtenerTurnoPorPaciente$Params } from '../fn/turno-controller/obtener-turno-por-paciente';
import { obtenerTurnos } from '../fn/turno-controller/obtener-turnos';
import { ObtenerTurnos$Params } from '../fn/turno-controller/obtener-turnos';
import { TurnoDto } from '../models/turno-dto';

@Injectable({ providedIn: 'root' })
export class TurnoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `editarTurno()` */
  static readonly EditarTurnoPath = '/turnos/{idTurno}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarTurno()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarTurno$Response(params: EditarTurno$Params, context?: HttpContext): Observable<StrictHttpResponse<TurnoDto>> {
    return editarTurno(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarTurno$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editarTurno(params: EditarTurno$Params, context?: HttpContext): Observable<TurnoDto> {
    return this.editarTurno$Response(params, context).pipe(
      map((r: StrictHttpResponse<TurnoDto>): TurnoDto => r.body)
    );
  }

  /** Path part for operation `eliminarTurno()` */
  static readonly EliminarTurnoPath = '/turnos/{idTurno}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarTurno()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarTurno$Response(params: EliminarTurno$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return eliminarTurno(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarTurno$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarTurno(params: EliminarTurno$Params, context?: HttpContext): Observable<string> {
    return this.eliminarTurno$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `obtenerTurnos()` */
  static readonly ObtenerTurnosPath = '/turnos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerTurnos()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTurnos$Response(params?: ObtenerTurnos$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TurnoDto>>> {
    return obtenerTurnos(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerTurnos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTurnos(params?: ObtenerTurnos$Params, context?: HttpContext): Observable<Array<TurnoDto>> {
    return this.obtenerTurnos$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TurnoDto>>): Array<TurnoDto> => r.body)
    );
  }

  /** Path part for operation `agendarTurno()` */
  static readonly AgendarTurnoPath = '/turnos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agendarTurno()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agendarTurno$Response(params: AgendarTurno$Params, context?: HttpContext): Observable<StrictHttpResponse<TurnoDto>> {
    return agendarTurno(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `agendarTurno$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agendarTurno(params: AgendarTurno$Params, context?: HttpContext): Observable<TurnoDto> {
    return this.agendarTurno$Response(params, context).pipe(
      map((r: StrictHttpResponse<TurnoDto>): TurnoDto => r.body)
    );
  }

  /** Path part for operation `obtenerTurnoPorPaciente()` */
  static readonly ObtenerTurnoPorPacientePath = '/turnos/pacientes/{idPaciente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerTurnoPorPaciente()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTurnoPorPaciente$Response(params: ObtenerTurnoPorPaciente$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TurnoDto>>> {
    return obtenerTurnoPorPaciente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerTurnoPorPaciente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTurnoPorPaciente(params: ObtenerTurnoPorPaciente$Params, context?: HttpContext): Observable<Array<TurnoDto>> {
    return this.obtenerTurnoPorPaciente$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TurnoDto>>): Array<TurnoDto> => r.body)
    );
  }

  /** Path part for operation `obtenerTurnoPorDoctor()` */
  static readonly ObtenerTurnoPorDoctorPath = '/turnos/doctores/{idDoctor}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerTurnoPorDoctor()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTurnoPorDoctor$Response(params: ObtenerTurnoPorDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TurnoDto>>> {
    return obtenerTurnoPorDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerTurnoPorDoctor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerTurnoPorDoctor(params: ObtenerTurnoPorDoctor$Params, context?: HttpContext): Observable<Array<TurnoDto>> {
    return this.obtenerTurnoPorDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TurnoDto>>): Array<TurnoDto> => r.body)
    );
  }

}
