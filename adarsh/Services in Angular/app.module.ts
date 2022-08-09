import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistnamesComponent } from './artistnames/artistnames.component';
import { DataService } from './data.service'
@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistnamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }