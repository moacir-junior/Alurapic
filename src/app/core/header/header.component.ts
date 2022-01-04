import { Component, OnInit } from '@angular/core';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    // Fontawesome icons tie
    public faUserCircle = faUserCircle;

    constructor() {}

    ngOnInit(): void {}
}