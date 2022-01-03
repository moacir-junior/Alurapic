import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { PhotosModule } from 'src/app/photos/photos.module';
import { ErrorsModule } from 'src/app/errors/errors.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    HomeModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
