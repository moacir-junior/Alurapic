import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    
    @ViewChild('username') public usernameInput!: ElementRef<HTMLInputElement>;
    
    public loginForm!: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(): void {
        const username = this.loginForm.get('username')?.value;
        const password = this.loginForm.get('password')?.value;

        this.authService.authenticate(username, password)
        .subscribe({
            next: () => this.router.navigate(['user', username]),
            error: (err) => {
                this.loginForm.reset();
                if(this.platformDetectorService.isPlatformBrowser()) {
                    this.usernameInput.nativeElement.focus();
                }
            }
        });
    }
}