/* tslint:disable */
/* eslint-disable */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfiguration, ApiConfigurationParams} from './api-configuration';

import {RegistroMedicoControllerService} from './services/registro-medico-controller.service';
import {PacienteControllerService} from './services/paciente-controller.service';
import {EspecialidadControllerService} from './services/especialidad-controller.service';
import {DoctorControllerService} from './services/doctor-controller.service';
import {UsuarioControllerService} from './services/usuario-controller.service';
import {HistoriaClinicaControllerService} from './services/historia-clinica-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    RegistroMedicoControllerService,
    PacienteControllerService,
    EspecialidadControllerService,
    DoctorControllerService,
    UsuarioControllerService,
    HistoriaClinicaControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
