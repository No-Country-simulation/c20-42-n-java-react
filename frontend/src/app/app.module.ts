import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './features/home/home.module';
import {SpecialtiesModule} from './features/specialties/specialties.module';
import {DoctorsModule} from './features/doctors/doctors.module';
import {AuthModule} from './features/auth/auth.module';
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
import {KeycloakService} from "./core/services/keycloak/keycloak.service";

export function kcFactory(keycloakService: KeycloakService) {
  return ()=> keycloakService.init();
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
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SpecialtiesModule,
    DoctorsModule,
    AuthModule,
    DoctorModule,
    UserModule
  ],
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
