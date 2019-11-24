import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CLIComponent } from './cli/cli.component';

const routes: Routes = [
  {path: 'ontology', loadChildren: './ontology/ontology.module#OntologyModule'},
  {path: 'cli', component: CLIComponent}//,
  //{path: '**', redirectTo: 'ontology'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
