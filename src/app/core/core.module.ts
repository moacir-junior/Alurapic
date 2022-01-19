import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class CoreModule {}