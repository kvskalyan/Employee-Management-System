import { RouterModule,Routes } from '@angular/router';

import { MainPageComponent } from "./mainPage.component";
import { EmployeesListComponent } from './../employeesList/employeesList.component';
import { AddEmployeeComponent } from './../addEmployee/addEmployee.component';
import { EmployeeDataComponent } from './../employeeData/employeeData.component';
import { EditEmployeeComponent } from './../editEmployee/editEmployee.component';
import { DeleteEmployeeComponent } from './../deleteEmployee/deleteEmployee.component';

import {EmployeeDataService} from './../mainPage/employeeData.service';
import {employee} from './../mainPage/employee';



const mainPageRoutes: Routes = [
    { path: 'employees', component: EmployeesListComponent },
    { path: 'addEmployee', component: AddEmployeeComponent },
    { path: 'employees/:id', component: EmployeeDataComponent },
    { path: 'editEmployee/:id', component: EditEmployeeComponent },
    { path: 'deleteEmployee/:id', component: DeleteEmployeeComponent }
];

export const routing= RouterModule.forRoot(mainPageRoutes);