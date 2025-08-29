import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-header',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="feature-header justify-content-between align-items-center">
      <div class="start">
        <div class="title">
          <mat-icon *ngIf="icon" class="feature-icon mr-3">
            {{ icon }}
          </mat-icon>
          <ng-content select="h2"></ng-content>
        </div>

        <ng-content select="p"></ng-content>
      </div>

      <ng-content select=".action"></ng-content>
    </div>
  `,
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent {
  @Input() icon?: string;
}
