import { NgModule } from '@angular/core';

import { DarkenOnHoverDirective } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.directive';

@NgModule({
    declarations: [DarkenOnHoverDirective],
    exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule {}