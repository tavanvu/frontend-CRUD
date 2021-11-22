import {Component, OnInit} from '@angular/core';
import {City} from '../../model/City';
import {CityService} from '../../service/city.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {
  city: City = {};
  id: number;

  constructor(private cityService: CityService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe(paraMap => {
      this.id = +paraMap.get('id');
      this.cityService.getById(this.id).subscribe(city => {
        this.city = city;
      });
    });
  }

  ngOnInit() {
  }

  delete() {
    this.cityService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl('/city');
    });

  }

}
