import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

const MODULES = [ComponentsModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
