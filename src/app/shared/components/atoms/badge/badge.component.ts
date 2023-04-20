import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {}
