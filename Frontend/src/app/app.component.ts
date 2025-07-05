import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule
  ],
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo">Cajuínas Social</div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal">
          <li nz-menu-item [routerLink]="['/']">Postagens</li>
          <li nz-menu-item [routerLink]="['/nova']">Nova Postagem</li>
        </ul>
      </nz-header>
      <nz-content style="padding: 24px">
        <router-outlet></router-outlet>
      </nz-content>
    </nz-layout>
  `,
  styles: [`
    .logo {
      color: white;
      font-weight: bold;
      float: left;
      margin-right: 24px;
    }
  `]
})
export class AppComponent {}
