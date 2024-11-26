import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { TravelList } from '../interfaces/travel-list.interface';
import { ListCitys } from '../interfaces/list-citys.interface';
import { ListOperators } from '../interfaces/list-operators.interface';
import { NewTravel } from '../interfaces/new-travel.interface';

@Injectable({
  providedIn: 'root'
})
export class TravelApiService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  getCitys():Observable<ListCitys[]> {
    const url = `${this.baseUrl}/api/Cities`;

    return this.http.get<ListCitys[]>(url).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }

  getOperators():Observable<ListOperators[]> {
    const url = `${this.baseUrl}/api/Operators`;

    return this.http.get<ListOperators[]>(url).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }

  getTravels():Observable<TravelList[]> {
    const url = `${this.baseUrl}/api/TravelSchedule`;

    return this.http.get<TravelList[]>(url).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }

  newTrabel(newTrael:NewTravel):Observable<boolean> {
    const url = `${this.baseUrl}/api/TravelSchedule`;

    return this.http.post<boolean>(url,newTrael).pipe(
      map(() => true),
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }

  deleteTravel(id:number):Observable<boolean> {
    const url = `${this.baseUrl}/api/TravelSchedule/${id}`;

    return this.http.delete<boolean>(url).pipe(
      map(() => true),
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }

  editTravel(idSchedule:number,travel:NewTravel):Observable<boolean> {
    const url = `${this.baseUrl}/api/TravelSchedule/${idSchedule}`;

    return this.http.put<boolean>(url,travel).pipe(
      map(() => true),
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }


}
