import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FullCalendarModule} from '@fullcalendar/angular';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeModule} from './features/home/home.module';
import {SpecialtiesModule} from './features/specialties/specialties.module';
import {DoctorsModule} from './features/doctors/doctors.module';
import {DoctorModule} from './features/doctor/doctor.module';
import {UserModule} from './features/user/user.module';
import {HeaderComponent} from './shared/components/main-layout/header/header.component';
import {FooterComponent} from './shared/components/main-layout/footer/footer.component';
import {SidebarComponent} from './shared/components/main-layout/sidebar/sidebar.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout/main-layout.component';
import {HighlightDirective} from './shared/directives/highlight.directive';
import {CustomPipe} from './shared/pipes/custom.pipe';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {HistorialMedicoComponent} from './features/historial-medico/historial-medico.component';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from './features/auth/auth.module';
import {authInterceptor} from './core/interceptors/auth.interceptor';
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component';
import {TurnosDoctorComponent} from './features/turnos-doctor/turnos-doctor.component';
import {PacientesModule} from "./features/pacientes-doctor/pacientes.module";
import {ConsultaMedicaComponent} from './features/consulta-medica/components/consulta-medica.component';
import {CommonModule} from '@angular/common';
import {TurnosModule} from './features/turnos/turnos.module';
import {BASE_PATH} from "./core/services/api-client";
import {environment} from "../environments/environment";

const firebaseConfig = {
  apiKey: 'AIzaSyD9S8qVCdnWpzM0rtJN_EKlkcW3V3FhlPQ',
  authDomain: 'telemedicina-536ac.firebaseapp.com',
  projectId: 'telemedicina-536ac',
  storageBucket: 'telemedicina-536ac.appspot.com',
  messagingSenderId: '319445915661',
  appId: '1:319445915661:web:954263b6a45b7be7ad9d44',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainLayoutComponent,
    HighlightDirective,
    CustomPipe,
    HistorialMedicoComponent,
    AuthLayoutComponent,
    TurnosDoctorComponent,
    ConsultaMedicaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SpecialtiesModule,
    DoctorsModule,
    DoctorModule,
    ReactiveFormsModule,
    UserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AuthModule,
    FullCalendarModule,
    PacientesModule,
    TurnosModule,
    CommonModule

  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    {provide: BASE_PATH, useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
