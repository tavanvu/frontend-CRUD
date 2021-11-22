import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CityService} from '../../service/city.service';
import {Router} from '@angular/router';
import {City} from '../../model/City';
import {Country} from '../../model/Country';
import {CountryService} from '../../service/country.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  country: Country[] = [];
  city: City;
  CityForm: FormGroup = new FormGroup({
      name: new FormControl(),
      country: new FormControl(),
      area: new FormControl(),
      population: new FormControl(),
      gdp: new FormControl(),
      description: new FormControl(),
    }
  );

  constructor(private cityService: CityService, private countryService: CountryService, private router: Router) {
  }

  ngOnInit() {
    this.getAllCountry();
  }

  getAllCountry() {
    this.countryService.getAllCountry().subscribe(data => {
      this.country = data;
    }, error => alert(error));
  }

  createCity() {
    const city = this.CityForm.value;
    city.country = {
      id: city.country
    };
    this.cityService.saveCity(city).subscribe(() =>  {
      this.router.navigateByUrl('/citys');
      alert('thành công');
    }, error => { alert(error);
    });
  }


}



