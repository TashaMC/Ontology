import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancercodesComponent } from './components/cancercodes/cancercodes.component';
import { OntologyComponent } from './ontology.component';

const routes: Routes = [
  { path: '', component: OntologyComponent,
    children: [
      { path: '', component: CancercodesComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OntologyRoutingModule { }
