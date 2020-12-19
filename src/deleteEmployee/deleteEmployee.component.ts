import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {employee} from './../mainPage/employee';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {EmployeeDataService} from './../mainPage/employeeData.service';
@Component ({
   selector: 'my-app',
   template: `<h1>Element is Deleted</h1>`,
   styles: ['h1{color: red}'],
})
export class DeleteEmployeeComponent implements OnInit{
  title: string="Delete Employee";
  dataId;
  constructor( private employeedata: EmployeeDataService,private route: ActivatedRoute,private location:Location){
    this.route.params.subscribe( params => this.dataId=params.id);
  }
  ngOnInit(){
      this.employeedata.deleteById(this.dataId);
      this.location.back();
  }
}