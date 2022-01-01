import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
    selector: 'ap-photos',
    templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnChanges {

    @Input()
    public photos: Photo[] = [];

    public rows: any[] = [];

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