import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntologyRoutingModule } from './ontology-routing.module';
import { CancercodesComponent } from './cancercodes/cancercodes.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [CancercodesComponent],
  imports: [
    CommonModule,
    OntologyRoutingModule,
    MaterialModule
  ]
})
export class OntologyModule { }
