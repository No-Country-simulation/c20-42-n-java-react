import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";
import {map} from "rxjs/operators";


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

export const getUserFromLocalStorage = () => {
  const usuario = localStorage.getItem('usuario');
  return usuario ? JSON.parse(usuario) : null;
};

export const patientGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return authStateObs$().pipe(
    map(() => {
      const usuario = getUserFromLocalStorage();
      if (!usuario || usuario.rol !== 'PACIENTE') {
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
      const usuario = getUserFromLocalStorage();
      if (!usuario || usuario.rol !== 'DOCTOR') {
        router.navigateByUrl('/login');
        return false;
      }
      return true;
    })
  );
};
