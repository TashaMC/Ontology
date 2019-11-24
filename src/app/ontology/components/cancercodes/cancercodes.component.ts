import { Component, OnInit } from '@angular/core';
import { CancerCodesService } from  './services/cancer-codes.service'
import { Cancer } from  './models/cancer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cancercodes',
  templateUrl: './cancercodes.component.html',
  styles: []
})
export class CancercodesComponent implements OnInit {

  private codes: Cancer[];
  private _cancerCode: number;
  private _returnCancerValue: number;
  private _otherCode: number;
  private _returnOtherValue: number;
  errorMessage: String;

  constructor(private _CancerCodesService: CancerCodesService) { 
  }

  set cancerCode(value: number){
      this._cancerCode = value;
      this._CancerCodesService.getCode(this._cancerCode)
  }
  get cancerCode(): number{
    return this._cancerCode
  }

  set returnCancerCode(value: number){
    this._returnCancerValue = value;
  }
  get returnCancerCode(): number{
    return this._returnCancerValue
  }

  set returnOtherCode(value: number){
    this._returnOtherValue = value;
  }
  get returnOtherCode(): number{
    return this._returnOtherValue
  }

  set otherCode(value: number){
    this._otherCode = value;
  }
  get othereCode(): number{
    return this._otherCode
  }

  ngOnInit() {
    this._CancerCodesService.getAllCodes().subscribe({
      next: code => {
         this.codes = code;
      },
      error: err => this.errorMessage = err
    });
  }

}
