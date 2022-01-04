import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from 'src/app/core/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        FontAwesomeModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {}