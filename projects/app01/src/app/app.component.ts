import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <nav style="background-color: #076e95; color: #fff;">
        <ul style="display: flex; list-style-type: none; justify-content: space-around; cursor: pointer;">
          <li [routerLink]="['/']">Home</li>
          <li [routerLink]="['/hello']">Hello router</li>
        </ul>
      </nav>
    <div style="text-align:center" class="content">
      <h1>
        Welcome to App01 - This is another Angular Application
      </h1>
      <span style="display: block">Here lets export some modules and components.</span>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app01';
}
