import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CLIComponent } from './cli/cli.component';
import { CancerComponent } from './cancer/cancer.component';

@NgModule({
  declarations: [
    AppComponent,
    CLIComponent,
    CancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
