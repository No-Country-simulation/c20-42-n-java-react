import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
import {
  DoctorUserHeaderComponent
} from './shared/components/doctor-user-layout/doctor-user-header/doctor-user-header.component';
import {
  DoctorUserFooterComponent
} from './shared/components/doctor-user-layout/doctor-user-footer/doctor-user-footer.component';
import {
  DoctorUserSidebarComponent
} from './shared/components/doctor-user-layout/doctor-user-sidebar/doctor-user-sidebar.component';
import {
  DoctorUserLayoutComponent
} from './shared/components/doctor-user-layout/doctor-user-layout/doctor-user-layout.component';
import {HighlightDirective} from './shared/directives/highlight.directive';
import {CustomPipe} from './shared/pipes/custom.pipe';
import {provideHttpClient} from "@angular/common/http";
import {TurnosComponent} from './features/turnos/turnos.component';
import {HistorialMedicoComponent} from './features/historial-medico/historial-medico.component';
import {getAuth, provideAuth} from "@angular/fire/auth";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "./features/auth/register/register.component";
import {LoginComponent} from "./features/auth/login/login.component";
import {AuthModule} from "./features/auth/auth.module";

const firebaseConfig = {
  apiKey: "AIzaSyD9S8qVCdnWpzM0rtJN_EKlkcW3V3FhlPQ",
  authDomain: "telemedicina-536ac.firebaseapp.com",
  projectId: "telemedicina-536ac",
  storageBucket: "telemedicina-536ac.appspot.com",
  messagingSenderId: "319445915661",
  appId: "1:319445915661:web:954263b6a45b7be7ad9d44",
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainLayoutComponent,
    DoctorUserHeaderComponent,
    DoctorUserFooterComponent,
    DoctorUserSidebarComponent,
    DoctorUserLayoutComponent,
    HighlightDirective,
    CustomPipe,
    TurnosComponent,
    HistorialMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SpecialtiesModule,
    DoctorsModule,
    DoctorModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AuthModule
  ],
  providers: [
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
