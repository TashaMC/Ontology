import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Cancer } from  './models/cancer';

@Injectable({
  providedIn: 'root'
})
export class CancerCodesService {
  private codeUrl : string;

  constructor(private _http: HttpClient) {
    this.codeUrl = "http://0.0.0.0:3000/cancerCodes";
  }
  
  getCode(): Observable<Cancer[]> {
    return this._http.get<Cancer[]>(this.codeUrl, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }).pipe(
      tap(data => console.group('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    //todo finish this.
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: $(err.error.message)`;
    } else {
      errorMessage = "";
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  } 
  
}
