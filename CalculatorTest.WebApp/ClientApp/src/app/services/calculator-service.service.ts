import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IPostCalculatorFeedback, IPostCalculatorOperation } from '../data/calculator-data';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  PostAddOperation(operation: IPostCalculatorOperation): Observable<IPostCalculatorFeedback> {
    const headers = {
      headers: { 'Content-Type': 'application/json' }
    };
    const url = this.baseUrl + 'api/Calculator/Add';
    const existingVal = operation.start;
    return this.http.post<IPostCalculatorFeedback>(url, operation, headers).pipe(
      catchError((err) => {
        let errResult: IPostCalculatorFeedback = {
          success: false,
          feedback: err.error.title,
          newVal: existingVal
        };
        return of(errResult);
      })
    );
  }

  PostSubtractOperation(operation: IPostCalculatorOperation): Observable<IPostCalculatorFeedback> {
    const headers = {
      headers: { 'Content-Type': 'application/json' }
    };
    const url = this.baseUrl + 'api/Calculator/Subtract';
    const existingVal = operation.start;
    return this.http.post<IPostCalculatorFeedback>(url, operation, headers).pipe(
      catchError((err) => {
        let errResult: IPostCalculatorFeedback = {
          success: false,
          feedback: err.error.title,
          newVal: existingVal
        };
        return of(errResult);
      })
    );
  }
}
