import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service/auth.service';
import {catchError, tap, throwError} from 'rxjs';
import {error} from '@angular/compiler-cli/src/transformers/util';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;
  const token = authService.token;
  if (!token) {
    return next(req);
  }

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(req)
    .pipe(
      catchError(error =>
      if(error.status === 403){
        return refreshAndProcced(authService, req, next)
      }
      return throwError(error)
    }

    )
};


const refreshAndProcced = (authService: AuthService, req: HttpRequest, next: HttpHandlerFn) => {
  return authService.refreshAuthToken()
    .pipe(
      tap(res =>),
      catchError(err => {
        this.logout()
        return throwError(err)
      })
    )
}
