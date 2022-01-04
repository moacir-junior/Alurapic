import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const API = 'http://localhost:3000/';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) {}

    authenticate(userName: string, password: string) {
        return this.http.post(`${API}user/login`, { userName, password }, { observe: 'response' })
            .pipe(tap(res => {
                const token = res.headers.get('x-access-token');
                token && this.tokenService.setToken(token);
            }));
    }
}