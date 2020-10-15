import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav style="background-color: #a6120d; color: #fff; padding: 10px;">
      <ul style="display: flex; list-style-type: none; justify-content: space-around; cursor: pointer;">
        <li [routerLink]="['/']">Home</li>
        <li [routerLink]="['/hello-mfe']">Hello router</li>
      </ul>
    </nav>
    <div style="text-align:center" class="content">
      <h1>
        Welcome to Shell App - This is the root application
      </h1>
      <span style="display: block">All MFe are loaded here!</span>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'shell';
}
