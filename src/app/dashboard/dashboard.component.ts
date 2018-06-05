import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  employees: Employee[] = [];
  closeResult: string;

  constructor(private employeeservice: EmployeeService,private modalService: NgbModal) {

  }



  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("no 1 =>ngOnchange=>Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.");
    
  }

  

  ngOnInit() {
    console.log("no 2=>ngoninit");
    

    this.getEmployees();
  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("no 3=> ngDoCheck=>Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.");
    
  }
ngAfterContentInit() {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  console.log(" no 4=>ngAfterContentInit =>Called after ngOnInit when the component's or directive's content has been initialized.");
  
}
ngAfterContentChecked() {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  console.log("no 5=> ngAfterContentChecked =>Called after every check of the component's or directive's content.");
  
}

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("no 6=>ngafterviewInit=>Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.");
  }
 
ngAfterViewChecked() {
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  console.log("no 7=>ngAfterViewChecked=>Called after every check of the component's view. Applies to components only.");
  
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log("no 8=>ngOnDestroy=>Called once, before the instance is destroyed.");
  
}
clickme(content)
{
  console.log("inside click me");
  this.modalService.open(content).result.then((result) => {
    if (result === 'True') {
  
      console.log("do some change ");
      
    }
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  })
}


private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

  getEmployees(): void {
    this.employeeservice.getEmployees().subscribe(employees => this.employees = employees.slice(1, 5));
  }
}

