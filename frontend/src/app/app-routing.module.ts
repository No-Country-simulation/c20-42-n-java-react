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
import {HistorialMedicoComponent} from './features/historial-medico/historial-medico.component';
import {TurnosComponent} from './features/turnos/turnos.component';
import {doctorGuard, patientGuard,} from './core/guards/auth.guard';
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component';
import {RegisterDoctorComponent} from './features/auth/register-doctor/register-doctor.component';
import {TurnosDoctorComponent} from './features/turnos-doctor/turnos-doctor.component';
import {PacientesComponent} from "./features/pacientes-doctor/pacientes/pacientes.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'specialties', component: SpecialtiesComponent },
      { path: 'doctors', component: DoctorsComponent },
      {
        path: 'historial-medico/:id',
        canActivate: [doctorGuard],
        component: HistorialMedicoComponent,
      },
      {
        path: 'turnos',
        canActivate: [patientGuard],
        component: TurnosComponent,
      },
      {
        path: 'turnos-doctor',
        component: TurnosDoctorComponent,
        canActivate: [doctorGuard],
      },
      {
        path: 'doctor',
        canActivate: [doctorGuard],
        component: DoctorDashboardComponent,
      },
      {
        path: 'pacientes',
        canActivate: [doctorGuard],
        component: PacientesComponent,
      },
      {
        path: 'user',
        canActivate: [patientGuard],
        component: UserDashboardComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register-doctor', component: RegisterDoctorComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
