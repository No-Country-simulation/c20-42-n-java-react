import {HttpInterceptorFn} from '@angular/common/http';
import {from, switchMap} from "rxjs";
import {inject} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const afAuth = inject(AngularFireAuth);
  return from(afAuth.user).pipe(
    switchMap(user => {
      if (user) {
        // Obtiene el token del usuario autenticado
        return from(user.getIdToken()).pipe(
          switchMap(token => {

            const authReq = req.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            });
            return next(authReq); // Continua con la solicitud modificada
          })
        );
      }
      // Si no hay usuario autenticado, continua con la solicitud original
      return next(req);
    })
  );
};
