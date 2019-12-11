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
  private _cancerCode: string;
  private _returnCancerValue: Cancer[];
  private _otherCode: string;
  private _returnOtherValue: string;
  errorMessage: String;

  constructor(private _CancerCodesService: CancerCodesService) { 
  }

  set cancerCode(value: string){
      this._cancerCode = value;
  }
  get cancerCode(): string{
    return this._cancerCode
  }

  set returnCancerCode(value: Cancer[]){
    this._returnCancerValue = value;
  }
  get returnCancerCode(): Cancer[]{
    return this._returnCancerValue
  }

  set returnOtherCode(value: string){
    this._returnOtherValue = value;
  }
  get returnOtherCode(): string{
    return this._returnOtherValue
  }

  set otherCode(value: string){
    this._otherCode = value;
  }
  get othereCode(): string{
    return this._otherCode
  }

stuff(): string {
  return "1234";
}

  translateCancerCode(code: string) {
    this._CancerCodesService.getCode(code).subscribe({
     next: returnCode => {
      this._returnCancerValue = returnCode;

       //this.returnCancerCode(returnCode);
     },
     error: err => this.errorMessage = err
   });
  }

  ngOnInit() {
    // this._CancerCodesService.getAllCodes().subscribe({
    //   next: code => {
    //      this.codes = code;
    //   },
    //   error: err => this.errorMessage = err
    // });
  }

}
