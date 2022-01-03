import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignoutComponent
    ]
})
export class HomeModule {}