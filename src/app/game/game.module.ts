import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [CompComponent],
  imports: [CommonModule, GameRoutingModule],
  exports: [CompComponent],
})
export class GameModule {}
