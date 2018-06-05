import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import { of } from 'rxjs/observable/of';
import { EMPLOYEE } from './mockEmployees';

@Injectable()
export class EmployeeService {

  constructor() { }


  getEmployees():Observable<Employee[]>
  {
return of (EMPLOYEE);
  }

  getEmployee(id: number): Observable<Employee> {
    // Todo: send the message _after_ fetching the hero
   
    return of(EMPLOYEE.find(employee => employee.employeeId === id));
  }
}

