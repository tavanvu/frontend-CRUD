import {Component, OnInit} from '@angular/core';
import {Country} from '../../model/Country';
import {CountryService} from '../../service/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countrys: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.getAllCountry();
  }

  private getAllCountry() {
    this.countryService.getAllCountry().subscribe(data => {
      this.countrys = data;
    }, error => {
      alert(error);
    });
  }
}
