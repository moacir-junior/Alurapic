import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoService } from 'src/app/photos/photo/photo.service';
import { PhotoComponent } from 'src/app/photos/photo/photo.component';

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PhotoComponent
    ],
    providers: [
        PhotoService
    ]
})
export class PhotoModule {}