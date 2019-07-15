import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle.component';
import { GobattleComponent } from './gobattle/gobattle.component';

const routes: Routes = [
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'gobattle',
    component: GobattleComponent
  },
  {
    path: '**',
    component: BattleComponent
  }
];

@NgModule({
  declarations: [BattleComponent, GobattleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BattleModule { }
