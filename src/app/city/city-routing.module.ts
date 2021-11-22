import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './city-list/city-list.component';
import {CityCreateComponent} from './city-create/city-create.component';
import {CityEditComponent} from './city-edit/city-edit.component';
import {CityDeleteComponent} from './city-delete/city-delete.component';


const routes: Routes = [
  {
    path: '',
    component: CityListComponent
  }, {
    path: 'city/create',
    component: CityCreateComponent
  },
  {
    path: 'city/edit/:id',
    component: CityEditComponent
  }, {
    path: 'city/delete/:id',
    component: CityDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
