import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CLIComponent } from './cli/cli.component';
import { CancerComponent } from './cancer/cancer.component';
import { Cancer } from './cancer/models/cancer';

@NgModule({
  declarations: [
    AppComponent,
    CLIComponent,
    CancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
