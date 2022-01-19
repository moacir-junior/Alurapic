import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from 'src/app/home/signin/signin.component';
import { SignupComponent } from 'src/app/home/signup/signup.component';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        VmessageModule
    ]
})
export class HomeModule {}