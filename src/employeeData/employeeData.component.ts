import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";


import {EmployeeDataService} from './../mainPage/employeeData.service';
import {employee} from './../mainPage/employee';

@Component ({
   selector: 'my-app',
   templateUrl: './employeeData.component.html',
   styleUrls: [ './employeeData.component.css' ]
})
export   class   EmployeeDataComponent implements OnInit {
    title: string="Employee Details";
    dataId;
    constructor(private emp: EmployeeDataService,private route: ActivatedRoute, private location:Location){
      this.route.params.subscribe( params => this.dataId=params.id);
      //console.log(this.dataId);
    }
    employee:employee;
    ngOnInit(){
      this.employee= this.emp.getById(this.dataId);
    }
    goBack(event: any){
      this.location.back();
   }
}