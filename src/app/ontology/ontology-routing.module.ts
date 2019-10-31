import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancercodesComponent } from './cancercodes/cancercodes.component';


const routes: Routes = [
  {path: 'cancercodes', component: CancercodesComponent},
  {path: '**', redirectTo: 'cancercodes', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OntologyRoutingModule { }
