import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
