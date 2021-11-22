import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private URL = `http://localhost:8080/countries`;

  constructor(private httpClient: HttpClient) {
  }

  getAllCountry(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.URL);
  }
}
