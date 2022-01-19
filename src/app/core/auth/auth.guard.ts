import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user: User | null = null;
        this.userService.getUser().subscribe(u => user = u);

        if(user) {
            user = user as User;
            this.router.navigate(['user', user.name]);
            return false;
        }

        return true;
    }
}