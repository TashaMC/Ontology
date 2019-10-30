import { Component, OnInit } from '@angular/core';
import { CancerCodesService } from  './cancer-codes.service'
import { Cancer } from  './models/cancer';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.component.html',
  styles: []
})
export class CancerComponent implements OnInit {
  
  private code: Cancer[]
  errorMessage: String;

  constructor(private _CancerCodesService: CancerCodesService) { 
  }

  ngOnInit() {
    this._CancerCodesService.getCode().subscribe({
      next: code => {
         this.code = code;
      },
      error: err => this.errorMessage = err
    });
  }

}
