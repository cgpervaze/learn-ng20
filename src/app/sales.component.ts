import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './layout/header.component';
import { PageHeaderComponent } from './layout/page-header.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sales',
  imports: [MatButtonModule, MatIconModule, PageHeaderComponent, RouterModule],
  template: `
    <app-page-header icon="monetization_on">
      <h2>Sales</h2>

      <button routerLink="/home" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span>Go home</span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
      Hello from Sales
    </div>
  `
})
export class SalesComponent {}
