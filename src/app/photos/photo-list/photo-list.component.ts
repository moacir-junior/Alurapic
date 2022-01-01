import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
    selector: 'ap-photo-list',
    templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {
    photos: Photo[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username'];

    this.photoService.listFromUser(username)
      .subscribe(photos => this.photos = photos);
  }
}