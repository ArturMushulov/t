import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { ObjectSelectionService } from './object-selection.service';

@NgModule({
  declarations: [AppComponent, MapComponent, ObjectListComponent],
  imports: [BrowserModule, LeafletModule, AppRoutingModule],
  providers: [ObjectSelectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
