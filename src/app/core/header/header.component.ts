import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public user$!: Observable<User | null>;

    // Fontawesome icons tie
    public faUserCircle = faUserCircle;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }
}