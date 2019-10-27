import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  isLoggedInn: boolean;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedInn = this.authService.isLoggedIn();
  }
  onLogout() {
    this.authService.logout();
  }

}
