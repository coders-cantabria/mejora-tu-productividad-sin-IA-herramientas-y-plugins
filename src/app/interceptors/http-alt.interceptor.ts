import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpClientInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  req = req.clone({
    setHeaders: {
      authorization: 'Bearer + token'
    }
  });

  return next(req);
};
