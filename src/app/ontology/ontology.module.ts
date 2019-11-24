import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntologyRoutingModule } from './ontology-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancercodesComponent } from './components/cancercodes/cancercodes.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { OntologyComponent } from './ontology.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CancercodesComponent, 
    ToolbarComponent, 
    SidenavComponent, 
    OntologyComponent
  ],
  imports: [
    CommonModule,
    OntologyRoutingModule,
    FormsModule,
    MatButtonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class OntologyModule { }
