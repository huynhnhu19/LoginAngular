import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
    private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // minutes = 20;
    // currentTime = new Date().getMinutes();
    // timeSetup = localStorage.getItem('currentTime');
    loggedIn = localStorage.getItem('logged');
    constructor(
        private router: Router
    ) { }

    login(user: User) {
        if (user.username === 'admin' && user.password === 'admin') {
            this.logged.next(true);
            localStorage.setItem('user', user.username);
            if(this.loggedIn ==null){
                localStorage.setItem('logged', 'true');
            }
            this.router.navigate(['home']);
            // if( this.timeSetup ==null){
            //     localStorage.setItem('timeSetup', this.currentTime);
            //     this.router.navigate(['home']);
            // } else if(this.currentTime- this.timeSetup > 1){
            //     localStorage.clear();
            //     this.logged.next(false);
            //     this.router.navigate(['login']);
            // }
        } else {
            window.alert('Wrong username or password');
            localStorage.setItem('user', null);
        }
    }

    get isLoggedIn() {
        return this.logged.asObservable();
    }

    logout() {
        this.logged.next(false);
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
