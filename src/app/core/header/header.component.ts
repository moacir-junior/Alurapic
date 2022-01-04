import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public user!: User;

    // Fontawesome icons tie
    public faUserCircle = faUserCircle;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            if(user) {
                this.user = user;
            }
        });
    }
}