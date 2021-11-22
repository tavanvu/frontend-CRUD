import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {City} from '../../model/City';
import {CityService} from '../../service/city.service';
import {ActivatedRoute} from '@angular/router';
import {Country} from '../../model/Country';
import {CountryService} from '../../service/country.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  city: City = {};
  id: number;
  country: Country[] = [];
  editCityForm: FormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      country: new FormControl(),
      area: new FormControl(),
      population: new FormControl(),
      gdp: new FormControl(),
      description: new FormControl(),
    }
  );


  constructor(private cityService: CityService, private countryService: CountryService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.cityService.getById(this.id).subscribe(city => {
        this.city = city;
        this.editCityForm = new FormGroup({
          id: new FormControl(this.city.id),
          name: new FormControl(this.city.name),
          country: new FormControl(this.city.country.id),
          area: new FormControl(this.city.area),
          population: new FormControl(this.city.population),
          gdp: new FormControl(this.city.gdp),
          description: new FormControl(this.city.description),
        });


      });
    });
  }

  ngOnInit() {
    this.getAllCountry();
  }

  private getAllCountry() {
    this.countryService.getAllCountry().subscribe(data => {
      this.country = data;
    }, error => alert(error));
  }

  editCity() {
    const city = this.editCityForm.value;
    city.country = {
      id: city.country
    };
    this.cityService.editCity(this.id, city).subscribe(() =>
      alert('thành công') , error => alert('lỗi'));
  }

  get name() {
    return this.editCityForm.get('name');
  }


}
