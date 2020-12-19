import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {employee} from './../mainPage/employee';
import {Location} from "@angular/common";


import {DataVerification} from './../mainPage/dataVerification.service';
import {EmployeeDataService} from './../mainPage/employeeData.service';

@Component ({
   selector: 'my-app',
   templateUrl: './addEmployee.component.html',
   styleUrls: [ './addEmployee.component.css' ]
})
export   class   AddEmployeeComponent  {
  title: String="Add Employee";
  name: string="";
  location: string="Bangalore";
  email: string="";
  mobile: string="";
  done:string="";
  isDisabled:boolean =false ;
  nameBoolean: boolean =false;
  emailBoolean: boolean =false;
  mobileBoolean: boolean =false;
  employees: employee[];
  constructor(private verify: DataVerification , private employeedata: EmployeeDataService,private web:Location){}
  changedName(event: any) {
    this.nameBoolean = this.verify.verifyName(this.name);
    this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
  }
  changedEmail(event: any) {
    this.emailBoolean = this.verify.verifyEmail(this.email);
    this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
  }
  changedMobile(event: any) {
    this.mobileBoolean = this.verify.verifyMobile(this.mobile);
    this.isDisabled= this.nameBoolean && this.emailBoolean && this.mobileBoolean;
  }
  selectedLocation(event: any) {
    this.location = event.target.value;
  }
 addEmployee(event: any){
    //Adding Employee
    this.employees=this.employeedata.add(this.name,this.location,this.email,this.mobile);
    this.isDisabled= false;
    this.web.back();
 }
}