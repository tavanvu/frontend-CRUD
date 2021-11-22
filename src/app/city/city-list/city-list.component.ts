import {Component, OnInit} from '@angular/core';
import {City} from '../../model/City';
import {CityService} from '../../service/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  citys: City[] = [];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.cityService.getAll().subscribe(citys => {
        this.citys = citys;
      }, error => {
        alert(error);
      }
    );
  }

}
