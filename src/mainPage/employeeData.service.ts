import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {employee} from './../mainPage/employee' 


//export const employees: employee[]=[];
@Injectable({providedIn: "root"})
export class EmployeeDataService extends employee implements InMemoryDbService  {
   employees: employee[];
  createDb() {
    this.employees=[ 
        { id: 1, name: "Ram", location: "Bangalore",email: "ram@mail.com",mobile: "9867512345"}, 
        { id: 2, name: "Raj", location: "Chennai", email: "raj@mail.com", mobile: "7867534521"}, 
        { id: 3, name: "Vinay", location: "Pune", email: "vinay@mail.com",mobile: "9975287450"} 
      ]; 
      return this.employees;
  }
  add(name,location,email,mobile) {
    let len=this.employees.length;
   // console.log(len);
    if(len==0){
      this.employees[len]={id:1,name:name,location:location,email:email,mobile:mobile};
    }
    else{
      let newId= this.employees[len-1].id+1;
    this.employees[len]={id:newId,name:name,location:location,email:email,mobile:mobile};
    }
    return this.employees;
  }
  showAll() {
    return this.employees;
  }
  getById(id): employee{
    for(let employee of this.employees){
      if(employee.id==id)
        return employee;
    }
  }
  editById(id,name,location,email,mobile){
    for(let employee of this.employees){
      if(employee.id==id){
        let index=this.employees.indexOf(employee);
        this.employees[index].name=name;
        this.employees[index].location=location;
        this.employees[index].email=email;
        this.employees[index].mobile=mobile;
      }
    }
  }
  deleteById(id){
    for(let employee of this.employees){
      if(employee.id==id){
        let index=this.employees.indexOf(employee);
        this.employees.splice(index,1);
      }
    }
  }
}