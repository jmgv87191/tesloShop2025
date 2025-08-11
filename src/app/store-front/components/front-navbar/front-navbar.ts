import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-front-navbar',
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './front-navbar.html',
  styleUrl: './front-navbar.css'
})
export class FrontNavbar {

}
