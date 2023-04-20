import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() expiredDate!: number;
  @Input() members: unknown[] = [];
  @Input() activities: unknown[] = [];
  @Input() teamName!: string;
}
