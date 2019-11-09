import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';


/* tslint:disable:typedef */
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
  },
];
/* tslint:enable:typedef */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
