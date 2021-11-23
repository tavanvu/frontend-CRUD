import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryCreateComponent} from './country-create/country-create.component';
import {CountryEditComponent} from './country-edit/country-edit.component';
import {CountryDeleteComponent} from './country-delete/country-delete.component';


const routes: Routes = [
  {
    path: '',
    component: CountryListComponent
  }, {
    path: '/create',
    component: CountryCreateComponent
  },
  {
    path: '/edit/:id',
    component: CountryEditComponent
  }, {
    path: '/delete/:id',
    component: CountryDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
