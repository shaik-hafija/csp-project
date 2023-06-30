import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpactComponent,
    TimelineComponent,
    FlowersComponent,
    SellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
