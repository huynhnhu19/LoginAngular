import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { stringify, parse } from 'querystring';

@Injectable()
export class AuthService {
    private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    firstTime = new Date().getMinutes();
    setupTime = new Date().setMinutes(this.firstTime + 2).toString();
    currentTime = new Date().valueOf();
    constructor(
        private router: Router
    ) { }

    login(user: User) {
        if (user.username === 'admin' && user.password === 'admin') {
            this.logged.next(true);
            localStorage.setItem('user', user.username);
            localStorage.setItem('logged', 'true');
            this.router.navigate(['home']);
            localStorage.setItem('firstTime', this.firstTime.toString());
            localStorage.setItem('setupTime', this.setupTime);
        } else {
            window.alert('Wrong username or password');
            localStorage.setItem('user', null);
            localStorage.setItem('logged', 'false');
        }
    }
    isLoggedIn(): boolean {
        let status = false;
        if (localStorage.getItem('logged') === 'true') {
            status = true;
            const first = localStorage.getItem('firstTime');
            const setup = localStorage.getItem('setupTime');
            if ( this.currentTime > parseInt(setup)) {
                localStorage.clear();
                window.alert("Login to continue");
            }
        } else {
            status = false;
        }
        return status;
    }
    logout() {
        this.logged.next(false);
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
