import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from 'src/app/core/user/user.service';

const API = 'http://localhost:3000/';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {}

    authenticate(userName: string, password: string) {
        return this.http.post(`${API}user/login`, { userName, password }, { observe: 'response' })
            .pipe(tap(res => {
                const token = res.headers.get('x-access-token');
                token && this.userService.setToken(token);
            }));
    }
}