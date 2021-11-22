import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl = 'http://localhost:8080/city';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(this.baseUrl);
  }

  saveCity(city: City): Observable<City> {
    return this.http.post<City>(this.baseUrl, city);
  }

  editCity(id: number, city: City) {
    return this.http.put(this.baseUrl + `/${id}`, city);
  }

  getById(id: number): Observable<City> {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  delete(id: number): Observable<City> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

}
