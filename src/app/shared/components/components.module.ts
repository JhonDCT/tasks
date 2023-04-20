import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './atoms/avatar/avatar.component';
import { BadgeComponent } from './atoms/badge/badge.component';
import { IconComponent } from './atoms/icon/icon.component';
import { ButtonComponent } from './molecules/button/button.component';
import { CircularProgressComponent } from './molecules/circular-progress/circular-progress.component';
import { FloatingButtonComponent } from './molecules/floating-button/floating-button.component';
import { ProgressBarComponent } from './molecules/progress-bar/progress-bar.component';
import { ListTileComponent } from './organism/list-tile/list-tile.component';

const COMPONENTS = [
  AvatarComponent,
  ListTileComponent,
  IconComponent,
  ProgressBarComponent,
  BadgeComponent,
  ButtonComponent,
  CircularProgressComponent,
  FloatingButtonComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
