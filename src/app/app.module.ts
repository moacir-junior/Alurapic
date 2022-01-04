import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { PhotosModule } from 'src/app/photos/photos.module';
import { ErrorsModule } from 'src/app/errors/errors.module';
import { HomeModule } from 'src/app/home/home.module';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { TokenService } from './core/token/token.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    HomeModule,
    CoreModule
  ],
  providers: [
    AuthService,
    TokenService,
    PlatformDetectorService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
