import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000/';

@Injectable()
export class SignupService {
    constructor(private http: HttpClient) {}

    checkUserNameTaken(username: string) {
        return this.http.get(`${API}user/exists/${username}`);
    }
}