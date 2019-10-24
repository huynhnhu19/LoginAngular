import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private timeLog: number;
    get isLoggedIn() {
        return this.logged.asObservable();
    }
    constructor(
        private router: Router
    ) { }

    login(user: User) {
        if (user.username === 'admin' && user.password === 'admin') {
            this.logged.next(true);
            this.router.navigate(['home']);
        } else {
            window.alert('Wrong username or password');
        }
    }
    logout() {
        this.logged.next(false);
        this.router.navigate(['login']);
    }
}
