import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from 'src/app/core/token/token.service';
import { User } from 'src/app/core/user/user';
import jwtDecoder from 'jwt-decode';

@Injectable()
export class UserService {

    public userSubject = new BehaviorSubject<User | null>(null);

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(): Observable<User | null> {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(): void {
        const token = this.tokenService.getToken();
        if(token) {
            const user = jwtDecoder(token) as User;
            this.userSubject.next(user);
        }
    }

    hasToken() {
        return this.tokenService.hasToken();
    }

    removeToken() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }
}