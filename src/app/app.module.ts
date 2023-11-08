import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingsComponent } from './headings/headings.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryComponent } from './gallery/gallery.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeadingsComponent,
    NavbarsComponent,
    CardComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
 
    AppRoutingModule,
      FontAwesomeModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
