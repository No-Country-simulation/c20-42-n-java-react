import {NgModule} from '@angular/core';
import {LoginComponent} from './features/auth/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './features/auth/register/register.component';
import {DoctorDashboardComponent} from './features/doctor/components/doctor-dashboard/doctor-dashboard.component';
import {UserDashboardComponent} from './features/user/components/user-dashboard/user-dashboard.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout/main-layout.component';
import {HomeComponent} from './features/home/components/home/home.component';
import {SpecialtiesComponent} from './features/specialties/components/specialties/specialties.component';
import {DoctorsComponent} from './features/doctors/components/doctors/doctors.component';
import {
  DoctorUserLayoutComponent
} from './shared/components/doctor-user-layout/doctor-user-layout/doctor-user-layout.component';
import { HistorialMedicoComponent } from './features/historial-medico/historial-medico.component';
import { TurnosComponent } from './features/turnos/turnos.component';
import {canActivate} from "@angular/fire/auth-guard";
import {authGuard, publicGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'specialties', component: SpecialtiesComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'historial-medico', canActivate: [authGuard], component: HistorialMedicoComponent },
      { path: 'turnos', canActivate: [authGuard], component: TurnosComponent },
      { path: 'doctor', component: DoctorDashboardComponent },
      { path: 'user', canActivate: [authGuard], component: UserDashboardComponent }
    ]
  },
  {path: 'login', canActivate: [publicGuard], component : LoginComponent},
  {path: 'register', canActivate: [publicGuard], component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
