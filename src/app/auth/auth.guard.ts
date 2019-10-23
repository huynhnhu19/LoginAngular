import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}
    // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    // Observable
}