import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    //BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})

export class MaterialModule { 
  
}
