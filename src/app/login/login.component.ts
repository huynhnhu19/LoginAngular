import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Router} from '@angular/router';
import { User } from '../auth/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: User ={
    username: 'admin',
    password: 'admin'
  };
  submitted = false;
  // router: Router;
  // const user = this.users.find(x => x.username == username && x.password == password);
  constructor(
    private router: Router
  ) { }

  onSubmit() {
    // // console.log(form.value);
    // if(this.checkUser()){
    //   // console.log(this.user);
    //   this.submitted = true;
    //   // console.log(this.submitted);
    //   this.router.navigate(['home']);
    // }
    // else{
    //   this.submitted = false;
    //   window.alert("Wrong username or password")
    //   console.log(this.submitted)
    // }
  }

  // checkUser(){
  //   if(this.user.username =='admin' && this.user.password == 'admin')
  //     return true;
  //   return false;
  // }

}
