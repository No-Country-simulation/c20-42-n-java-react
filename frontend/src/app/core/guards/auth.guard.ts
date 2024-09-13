import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";
import {map} from "rxjs/operators";
import { Usuario } from '../services/api-client/models';


export const authStateObs$ = () => inject(AuthService).authState;

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return authStateObs$().pipe(
    map(user => {
      if(!user){
        router.navigateByUrl('/login');
        return false;
      }
      return true;
    })
  )
};

export const publicGuard: CanActivateFn = (route , state ) =>{
  const router = inject(Router);
  return authStateObs$().pipe(
    map(user => {
      if(user){
        router.navigateByUrl('/');
        return false;
      }
      return true;
    })
  )
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const patientGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return authStateObs$().pipe(
    map(() => {
      const user = getUserFromLocalStorage();
      if (!user || user.role !== 'PACIENTE') {
        router.navigateByUrl('/login');
        return false;
      }
      return true;
    })
  );
};

export const doctorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return authStateObs$().pipe(
    map(() => {
      const user = getUserFromLocalStorage();
      if (!user || user.role !== 'DOCTOR') {
        router.navigateByUrl('/login');
        return false;
      }
      return true;
    })
  );
};