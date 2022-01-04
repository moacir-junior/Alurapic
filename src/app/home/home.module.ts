import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from 'src/app/home/signin/signin.component';
import { SignoutComponent } from 'src/app/home/signout/signout.component';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        VmessageModule
    ]
})
export class HomeModule {}