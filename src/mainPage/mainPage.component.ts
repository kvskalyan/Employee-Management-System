import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from './../mainPage/employeeData.service';
import {employee} from './../mainPage/employee';

@Component({
  selector: 'my-app',
  templateUrl: './mainPage.component.html',
  styleUrls: [ './mainPage.component.css' ]
})
export class MainPageComponent  {
  title: String= "Employee Management System";
  employees: employee[]=[];
  constructor(private emp: EmployeeDataService){}

  ngOnInit(){
      this.employees = this.emp.createDb();
    }
}
