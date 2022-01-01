import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from './photo';

const api = 'http://localhost:3000/'

@Injectable()
export class PhotoService {
    constructor(private http: HttpClient) {}

    listFromUser(username: string) {
        return this.http.get<Photo[]>(`${api}${username}/photos`);
    }
}