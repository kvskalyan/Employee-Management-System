import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes,ActivatedRoute } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import {routing} from './mainPage.routing';
import { MainPageComponent } from './mainPage.component';
import { EmployeesListComponent } from './../employeesList/employeesList.component';
import { AddEmployeeComponent } from './../addEmployee/addEmployee.component';
import { EmployeeDataComponent } from './../employeeData/employeeData.component';
import { EditEmployeeComponent } from './../editEmployee/editEmployee.component';
import { DeleteEmployeeComponent } from './../deleteEmployee/deleteEmployee.component';
import {EmployeeDataService} from './employeeData.service';
import {EmployeeFilterPipe} from './../employeesList/employeeFilter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule , routing  ],
  declarations: [ MainPageComponent , EmployeesListComponent,AddEmployeeComponent,EmployeeDataComponent,EditEmployeeComponent,DeleteEmployeeComponent,EmployeeFilterPipe],
  providers :[EmployeeDataService],
  bootstrap:    [ MainPageComponent ]
})
export class MainPageModule { }
