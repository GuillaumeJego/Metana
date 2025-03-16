import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@Component({
  selector: 'app-header',
  imports: [
    LoginComponent,
    LogoComponent,
    HeaderNavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
