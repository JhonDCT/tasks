import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularProgressComponent implements AfterViewInit {
  @Input() progress = 0;
  @Input() size = 100;
  @ViewChild('progressEl') progressDiv!: ElementRef<HTMLDivElement>;

  loadData(): void {
    this.progressDiv.nativeElement.style.background = 'var(--text-off)';

    if (this.progress !== 0) {
      this.progressDiv.nativeElement.style.background = `conic-gradient(var(--primary) ${
        this.progress
      }%, var(--text-off) ${100 - this.progress}%)`;
    }
  }

  ngAfterViewInit(): void {
    this.loadData();
  }
}
