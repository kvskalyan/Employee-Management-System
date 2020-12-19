import { Component,OnInit } from '@angular/core';
import {EmployeeDataService} from './../mainPage/employeeData.service';
import {employee} from './../mainPage/employee';

@Component ({
   selector: 'my-app',
   templateUrl: './employeesList.component.html',
   styleUrls: [ './employeesList.component.css' ]
})

export   class   EmployeesListComponent  implements OnInit{
    title: string="Employee List";
    nameFilter: string="";
    employees: employee[]=[];
    len: number=0;
    i:number;
    constructor(private emp: EmployeeDataService){}

    ngOnInit(){
      this.employees = this.emp.showAll();
      this.len=0;
      
    }
    setLength(i:number){
      console.log(i);
      this.len= i+1;
    }
    zeroLength(){
      this.len= 0;
    }
}