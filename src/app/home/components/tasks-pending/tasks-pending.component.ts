import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tasks-pending',
  templateUrl: './tasks-pending.component.html',
  styleUrls: ['./tasks-pending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPendingComponent {
  onRedirect(): void {
    console.log('redirect');
  }
}
