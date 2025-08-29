import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '../menu.model';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule, MatIconModule, MatExpansionModule, MenuItemComponent],
  template: `
    <mat-list>
      @for (item of menu; track item) {
        @if (!item.subMenu?.length) {
          <mat-list-item>
            <mat-icon matListItemIcon>{{item.icon}}</mat-icon>
            <div matListItemTitle class="list-item">{{item.title}}</div>
          </mat-list-item>
        }
        @if (item.subMenu?.length) {
          <mat-expansion-panel [expanded]="item.expanded">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon matListItemIcon>{{item.icon}}</mat-icon>
                <span matListItemTitle class="list-item">{{item.title}}</span>
              </mat-panel-title>
            </mat-expansion-panel-header>
            <app-menu-item [menu]="item.subMenu || []"></app-menu-item>
          </mat-expansion-panel>
        }
      }
    </mat-list>
  `,
  styleUrls: ['./menu-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input({ required: true }) menu!: Menu;
}

