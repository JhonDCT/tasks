import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectsComponent {
  proyects: unknown[] = [{}];
}
