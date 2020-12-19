import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {DataVerification} from './../mainPage/dataVerification.service';
import {EmployeeDataService} from './../mainPage/employeeData.service';
import {employee} from './../mainPage/employee';

@Component ({
   selector: 'my-app',
   templateUrl: './editEmployee.component.html',
   styleUrls: [ './editEmployee.component.css' ]
})
export   class   EditEmployeeComponent implements OnInit {
    title: string="Edit Employee";
    dataId;
    employee:employee;
    name: string;
    location: string;
    email: string;
    mobile: string;
    done:string;
    isDisabled:boolean =false ;
    nameBoolean: boolean =true;
    emailBoolean: boolean =true;
    mobileBoolean: boolean =true;
    constructor(private verify: DataVerification,private emp: EmployeeDataService,private route: ActivatedRoute,private web:Location){
      this.route.params.subscribe( params => this.dataId=params.id);
      //console.log(this.dataId);
    }
    ngOnInit(){
      this.employee= this.emp.getById(this.dataId);
      this.name =this.employee.name;
      this.location =this.employee.location;
      this.email =this.employee.email;
      this.mobile =this.employee.mobile;
    }
    changedName(event: any) {
    this.done="";
    this.nameBoolean = this.verify.verifyName(this.name);
    this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
    }
    changedEmail(event: any) {
     this.done="";
     this.emailBoolean = this.verify.verifyEmail(this.email);
     this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
   }
   changedMobile(event: any) {
     this.done="";
     this.mobileBoolean = this.verify.verifyMobile(this.mobile);
     this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
   }
   selectedLocation(event: any) {
     this.done="";
     this.location = event.target.value;
     this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
   }
  editEmployee(event: any){
    //Editing Employee
    this.emp.editById(this.dataId,this.name,this.location,this.email,this.mobile);
    this.isDisabled=false;
    this.done="The Employee is Updated";
    this.web.back();
  }
}