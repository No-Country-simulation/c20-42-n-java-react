import { NgModule } from '@angular/core';
import { LoginComponent } from './features/auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { DoctorDashboardComponent } from './features/doctor/components/doctor-dashboard/doctor-dashboard.component';
import { UserDashboardComponent } from './features/user/components/user-dashboard/user-dashboard.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout/main-layout.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { SpecialtiesComponent } from './features/specialties/components/specialties/specialties.component';
import { DoctorsComponent } from './features/doctors/components/doctors/doctors.component';
import { DoctorUserLayoutComponent } from './shared/components/doctor-user-layout/doctor-user-layout/doctor-user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'specialties', component: SpecialtiesComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'doctor',
    component: DoctorUserLayoutComponent,
    children: [
      { path: '', component: DoctorDashboardComponent }
      // Otras rutas específicas del doctor
    ]
  },
  {
    path: 'user',
    component: DoctorUserLayoutComponent,
    children: [
      { path: '', component: UserDashboardComponent }
      // Otras rutas específicas del usuario
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
