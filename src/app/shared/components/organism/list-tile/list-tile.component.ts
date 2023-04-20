import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTileComponent {}
