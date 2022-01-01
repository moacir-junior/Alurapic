import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
    selector: 'ap-photo-list',
    templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] = [];
  public filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  keyupListener(event: any) {
    this.filter = event.target.value;
  }
}