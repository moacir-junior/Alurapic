import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from 'src/app/photos/models/photo';

const API = 'http://localhost:3000/'

@Injectable()
export class PhotoService {
    constructor(private http: HttpClient) {}

    listFromUser(username: string) {
        //TODO: Check if the username parameter was entered
        return this.http.get<Photo[]>(`${API}${username}/photos`);
    }

    listFromUserPaginated(username: string, page: number) {
        //TODO: Check if username and page parameters were entered
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(`${API}${username}/photos`, { params });
    }
}