import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from 'src/app/errors/not-found/not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ErrorsModule {}