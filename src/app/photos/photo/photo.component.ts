import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['photo.component.css']
})
export class PhotoComponent {
    @Input() 
    public description = '';
    
    @Input()
    public url = '';
}