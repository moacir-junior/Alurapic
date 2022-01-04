import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from 'src/app/photos/photo-form/photo-form.component';
import { PhotoListComponent } from 'src/app/photos/photo-list/photo-list.component';
import { NotFoundComponent } from 'src/app/errors/not-found/not-found.component';
import { PhotoListResolver } from 'src/app/photos/photo-list/photo-list.resolver';
import { SigninComponent } from 'src/app/home/signin/signin.component';

const routes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'user/:username', component: PhotoListComponent, resolve: { photos: PhotoListResolver } },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}