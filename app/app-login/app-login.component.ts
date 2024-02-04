import { Component } from '@angular/core';
import { AuthService } from '../app.component';

@Component({
  selector: 'app-app-login',
  standalone: true,
  imports: [],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent {
  constructor(private auth:AuthService){}
  needsLogin(){
    return ! this.auth.isAuthenticated();
  }

}
