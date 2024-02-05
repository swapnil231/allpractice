import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CascadingdropComponent } from './cascadingdrop/cascadingdrop.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'comp1', component: Comp1Component },
  { path: 'cascading', component: CascadingdropComponent },
  {
    path: 'gamemodule',
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
  },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
