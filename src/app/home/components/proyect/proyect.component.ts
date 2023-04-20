import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectComponent {
  @Input() expiredDate!: number;
  @Input() members: unknown[] = [];
  @Input() activities: unknown[] = [];
  @Input() teamName!: string;
}
