import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  template: `
    <mat-toolbar color="primary">
      <button (click)="menuToggled.emit(true)" mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <span class="title" routerLink="/">Dashboard</span>
      <span class="spacer"></span>
      <span class="welcome-text">Hello {{ user }}</span>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>person_pin</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="logout()">
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';

  logout(): void {
    console.log('Logged out');
  }
}
