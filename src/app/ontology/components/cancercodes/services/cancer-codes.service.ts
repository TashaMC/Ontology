import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Cancer } from  '../models/cancer';

@Injectable({
  providedIn: 'root'
})
export class CancerCodesService {
  private codeUrl : string;
  
  constructor(private _http: HttpClient) {
    this.codeUrl = "http://0.0.0.0:3000/cancerCodes/";
    
  }
  
  getAllCodes(): Observable<Cancer[]> {
    return this._http.get<Cancer[]>(this.codeUrl, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }).pipe(
      tap(data => console.group('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getCode(code: string): Observable<Cancer[]> {

    const options = {
      headers: new HttpHeaders().append('Content-Type',  'application/json'),
      params: new HttpParams().append("code",code)
    }

    return this._http.get<Cancer[]>(
      '/RetrieveCodes', 
      
     options
     ).pipe(
      tap(data => console.group('Code' + data[0])),
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
