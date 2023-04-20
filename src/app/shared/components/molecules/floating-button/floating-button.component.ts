import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingButtonComponent {}
