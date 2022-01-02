import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Photo } from 'src/app/photos/models/photo';
import { PhotoService } from 'src/app/photos/photo/photo.service';

@Component({
    selector: 'ap-photo-list',
    templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] = [];
  public filter: string = '';
  public hasMore: boolean = true;
  public username: string = '';
  public currentPage: number = 1;
  
  public faSearch = faSearch;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  onTypingFilter(event: any): void {
    this.filter = event;
  }

  loadPhotos() {
    this.photoService.listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(...photos);
        if(!photos.length) {
          this.hasMore = false;
        }
      });
  }
}