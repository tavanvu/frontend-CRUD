import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryCreateComponent} from './country-create/country-create.component';
import {CountryDeleteComponent} from './country-delete/country-delete.component';
import {CountryEditComponent} from './country-edit/country-edit.component';


@NgModule({
  declarations: [
    CountryListComponent,
    CountryCreateComponent,
    CountryDeleteComponent,
    CountryEditComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
