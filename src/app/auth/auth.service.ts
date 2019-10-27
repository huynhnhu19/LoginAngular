import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
    private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    minutes = 20;
    currentTime = new Date().getMinutes();
    timeSetup = localStorage.getItem('currentTime');
    constructor(
        private router: Router
    ) { }

    login(user: User) {
        if (user.username === 'admin' && user.password === 'admin') {
            this.logged.next(true);
            localStorage.setItem('user', user.username);
            localStorage.setItem('logged', 'true');
            this.router.navigate(['home']);
            // if (this.timeSetup == null) {
            //     localStorage.setItem('timeSetup', this.currentTime.toString());
            //     this.router.navigate(['home']);
            // } else if (this.currentTime-this.timeSetup > 1000) {
            //     localStorage.clear();
            //     this.logged.next(false);
            //     this.router.navigate(['login']);
            // }
            setTimeout(() => {
                localStorage.clear();
                this.router.navigate(['login']);
            }, 10000);
        } else {
            window.alert('Wrong username or password');
            localStorage.setItem('user', null);
            localStorage.setItem('logged', 'false');
        }
    }
    isLoggedIn(): boolean {
        // const loggedIn = localStorage.getItem('logged');
        // return this.logged.asObservable();
        // return console.log(loggedIn);
        let status = false;
        if (localStorage.getItem('logged') === 'true') {
            status = true;
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
