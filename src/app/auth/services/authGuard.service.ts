import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) {}
    canActivate(): Observable<boolean> {
        return this.authService.isLoggedIn$.pipe(map((isLogged) => {
            if (isLogged) {
                console.log('Is logged in');
                return true;
            }
            this.router.navigateByUrl('/');
            return false;
        }))
    }

}