/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { crearUsuario } from '../fn/usuario-controller/crear-usuario';
import { CrearUsuario$Params } from '../fn/usuario-controller/crear-usuario';
import { obtenerUsuario } from '../fn/usuario-controller/obtener-usuario';
import { ObtenerUsuario$Params } from '../fn/usuario-controller/obtener-usuario';
import { Usuario } from '../models/usuario';

@Injectable({ providedIn: 'root' })
export class UsuarioControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `obtenerUsuario()` */
  static readonly ObtenerUsuarioPath = '/usuarios';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerUsuario()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerUsuario$Response(params?: ObtenerUsuario$Params, context?: HttpContext): Observable<StrictHttpResponse<Usuario>> {
    return obtenerUsuario(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenerUsuario$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerUsuario(params?: ObtenerUsuario$Params, context?: HttpContext): Observable<Usuario> {
    return this.obtenerUsuario$Response(params, context).pipe(
      map((r: StrictHttpResponse<Usuario>): Usuario => r.body)
    );
  }

  /** Path part for operation `crearUsuario()` */
  static readonly CrearUsuarioPath = '/usuarios';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `crearUsuario()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearUsuario$Response(params: CrearUsuario$Params, context?: HttpContext): Observable<StrictHttpResponse<Usuario>> {
    return crearUsuario(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `crearUsuario$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  crearUsuario(params: CrearUsuario$Params, context?: HttpContext): Observable<Usuario> {
    return this.crearUsuario$Response(params, context).pipe(
      map((r: StrictHttpResponse<Usuario>): Usuario => r.body)
    );
  }

}
