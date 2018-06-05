import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  
  constructor(
    private route: ActivatedRoute,
    private employeeservice: EmployeeService,
    private location: Location
  ) { }

  @Input() 
  employee: Employee;


  
  ngOnInit(): void {
    this.getEmployee();
  }

  
  goBack(): void {
    this.location.back();
  }

 

  getEmployee():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeservice.getEmployee(id).subscribe(employee=>this.employee=employee);

  }

 
}
