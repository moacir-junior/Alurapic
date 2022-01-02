import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import { Photo } from 'src/app/photos/models/photo';

@Component({
    selector: 'ap-photos',
    templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnChanges {

    @Input() public photos: Photo[] = [];
    public rows: any[] = [];

    //Fontawesome icons tie
    public faHeart = faHeart;
    public faComment = faComment;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['photos']) {
            this.rows = this.groupColumns(this.photos);
        }
    }

    groupColumns(photos: Photo[]) {
        const rows: any[] = [];
        
        for(let i = 0; i < photos.length; i+=3) {
            rows.push(photos.slice(i, i + 3));
        }

        return rows;
    }
}