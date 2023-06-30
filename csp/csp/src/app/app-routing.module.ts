import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'impact',
    component:ImpactComponent
  },
  {
    path:'timeline',
    component:TimelineComponent
  },
  {
    path:'flower',
    component:FlowersComponent
  },
  {
    path:'sell',
    component:SellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
