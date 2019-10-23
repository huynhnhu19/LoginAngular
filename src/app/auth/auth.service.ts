import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';


@Injectable()
export class AuthService {
    private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.logged.asObservable();
    }
    constructor(private router: Router) { }

    login(user: User) {
        if (user.username === 'admin' && user.password === 'admin'){
            this.logged.next(true);
            this.router.navigate(['home']);
        }
    }
    logout(){
        this.logged.next(false);
        this.router.navigate(['login']);
    }

}