/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { crearRegistroMedico } from '../fn/registro-medico-controller/crear-registro-medico';
import { CrearRegistroMedico$Params } from '../fn/registro-medico-controller/crear-registro-medico';
import { eliminarRegistroMedico } from '../fn/registro-medico-controller/eliminar-registro-medico';
import { EliminarRegistroMedico$Params } from '../fn/registro-medico-controller/eliminar-registro-medico';
import { modificarRegistroMedico } from '../fn/registro-medico-controller/modificar-registro-medico';
import { ModificarRegistroMedico$Params } from '../fn/registro-medico-controller/modificar-registro-medico';
import { obtenerRegistroMedico } from '../fn/registro-medico-controller/obtener-registro-medico';
import { ObtenerRegistroMedico$Params } from '../fn/registro-medico-controller/obtener-registro-medico';
import { obtenerRegistrosMedicos } from '../fn/registro-medico-controller/obtener-registros-medicos';
import { ObtenerRegistrosMedicos$Params } from '../fn/registro-medico-controller/obtener-registros-medicos';
import { RegistroMedico } from '../models/registro-medico';
import { RegistroMedicoRes } from '../models/registro-medico-res';

@Injectable({ providedIn: 'root' })
export class RegistroMedicoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerRegistroMedico()` */
  static readonly ObtenerRegistroMedicoPath = '/pacientes/{pacienteId}/historia-clinica/registros-medicos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerRegistroMedico()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerRegistroMedico$Response(params: ObtenerRegistroMedico$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistroMedicoRes>> {
    return obtenerRegistroMedico(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerRegistroMedico$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerRegistroMedico(params: ObtenerRegistroMedico$Params, context?: HttpContext): Observable<RegistroMedicoRes> {
    return this.obtenerRegistroMedico$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistroMedicoRes>): RegistroMedicoRes => r.body)
    );
  }

  /** Path part for operation `modificarRegistroMedico()` */
  static readonly ModificarRegistroMedicoPath = '/pacientes/{pacienteId}/historia-clinica/registros-medicos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modificarRegistroMedico()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modificarRegistroMedico$Response(params: ModificarRegistroMedico$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistroMedicoRes>> {
    return modificarRegistroMedico(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modificarRegistroMedico$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modificarRegistroMedico(params: ModificarRegistroMedico$Params, context?: HttpContext): Observable<RegistroMedicoRes> {
    return this.modificarRegistroMedico$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistroMedicoRes>): RegistroMedicoRes => r.body)
    );
  }

  /** Path part for operation `eliminarRegistroMedico()` */
  static readonly EliminarRegistroMedicoPath = '/pacientes/{pacienteId}/historia-clinica/registros-medicos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarRegistroMedico()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarRegistroMedico$Response(params: EliminarRegistroMedico$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return eliminarRegistroMedico(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarRegistroMedico$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarRegistroMedico(params: EliminarRegistroMedico$Params, context?: HttpContext): Observable<void> {
    return this.eliminarRegistroMedico$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `obtenerRegistrosMedicos()` */
  static readonly ObtenerRegistrosMedicosPath = '/pacientes/{pacienteId}/historia-clinica/registros-medicos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerRegistrosMedicos()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerRegistrosMedicos$Response(params: ObtenerRegistrosMedicos$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RegistroMedico>>> {
    return obtenerRegistrosMedicos(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerRegistrosMedicos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerRegistrosMedicos(params: ObtenerRegistrosMedicos$Params, context?: HttpContext): Observable<Array<RegistroMedico>> {
    return this.obtenerRegistrosMedicos$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RegistroMedico>>): Array<RegistroMedico> => r.body)
    );
  }

  /** Path part for operation `crearRegistroMedico()` */
  static readonly CrearRegistroMedicoPath = '/pacientes/{pacienteId}/historia-clinica/registros-medicos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `crearRegistroMedico()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearRegistroMedico$Response(params: CrearRegistroMedico$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistroMedicoRes>> {
    return crearRegistroMedico(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `crearRegistroMedico$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearRegistroMedico(params: CrearRegistroMedico$Params, context?: HttpContext): Observable<RegistroMedicoRes> {
    return this.crearRegistroMedico$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistroMedicoRes>): RegistroMedicoRes => r.body)
    );
  }

}
