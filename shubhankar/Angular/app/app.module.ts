import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { ArtistnamesComponent } from './artistnames/artistnames.component';
import { ArtistsComponent } from './artists/artists.component';
import { DataService } from './artistnames/data.service';
@NgModule({
  declarations: [
    AppComponent,
    ArtistnamesComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
