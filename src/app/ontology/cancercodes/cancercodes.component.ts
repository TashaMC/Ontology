import { Component, OnInit } from '@angular/core';
import { CancerCodesService } from  './services/cancer-codes.service'
import { Cancer } from  './models/cancer';

@Component({
  selector: 'app-cancercodes',
  templateUrl: './cancercodes.component.html',
  styles: []
})
export class CancercodesComponent implements OnInit {

  private codes: Cancer[]
  errorMessage: String;

  constructor(private _CancerCodesService: CancerCodesService) { 
  }

  ngOnInit() {
    this._CancerCodesService.getCode().subscribe({
      next: code => {
         this.codes = code;
      },
      error: err => this.errorMessage = err
    });
  }

}
