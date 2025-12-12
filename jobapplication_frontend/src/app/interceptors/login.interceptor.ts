import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUserToken = localStorage.getItem('currentUserToken');
        if (currentUserToken) {
            const cloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${currentUserToken}`)
            });
            return next.handle(cloneReq);
        } else {
            return next.handle(req);
        }
    }   
}

export const LoginInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true
};
