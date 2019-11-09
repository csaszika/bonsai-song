import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SongsContainerComponent } from './shell/songs-container/songs-container.component';


/* tslint:disable:typedef */
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'songs',
        component: SongsContainerComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'songs' },
    ]
  },
];
/* tslint:enable:typedef */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
