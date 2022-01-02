import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from 'src/app/photos/models/photo';
import { PhotoService } from 'src/app/photos/photo/photo.service';

@Injectable()
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    constructor(private service: PhotoService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        return this.service.listFromUserPaginated(route.params['username'], 1);
    }
}