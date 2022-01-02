import { NgModule } from '@angular/core';

import { PhotoListModule } from 'src/app/photos/photo-list/photo-list.module';
import { PhotoFormModule } from 'src/app/photos/photo-form/photo-form.module';

@NgModule({
    imports: [
        PhotoListModule,
        PhotoFormModule
    ],
})
export class PhotosModule {}