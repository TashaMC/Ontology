import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CLIComponent} from './cli/cli.component';
import {CancerComponent} from './cancer/cancer.component';

const routes: Routes = [
  {path: 'cli', component: CLIComponent},
  {path: 'cancer', component: CancerComponent},
  {path:'', redirectTo: 'cli', pathMatch: 'full'},
  {path: '**', redirectTo: 'cli', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
