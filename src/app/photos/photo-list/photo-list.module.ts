import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PhotoModule } from 'src/app/photos/photo/photo.module';
import { FilterByDescriptionPipe } from 'src/app/photos/photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from 'src/app/photos/photo-list/load-button/load-button.component';
import { PhotoListComponent } from 'src/app/photos/photo-list/photo-list.component';
import { PhotoListResolver } from 'src/app/photos/photo-list/photo-list.resolver';
import { PhotosComponent } from 'src/app/photos/photo-list/photos/photos.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darkenOnHover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        LoadButtonComponent,
        PhotosComponent,
        SearchComponent,
        FilterByDescriptionPipe
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ],
    providers: [
        PhotoListResolver
    ]
})
export class PhotoListModule {}