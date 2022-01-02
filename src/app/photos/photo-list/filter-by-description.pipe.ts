import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from 'src/app/photos/models/photo';

@Pipe({
    name: 'filterbydescription'
})
export class FilterByDescriptionPipe implements PipeTransform {
    transform(photos: Photo[], description: string) {
        description = description.trim().toLowerCase();

        if(description) {
            return photos.filter(photo => photo.description.toLowerCase().includes(description));
        } else {
            return photos;
        }
    }
}