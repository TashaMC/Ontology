import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CLIComponent } from './cli/cli.component';
import { OntologyModule } from './ontology/ontology.module';

@NgModule({
  declarations: [
    AppComponent,
    CLIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OntologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
