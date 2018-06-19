import { element } from 'protractor';
import { Employee } from './../employee';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ExcelService } from '../excel.service';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  employees:Employee[]=[];
  public dateFlag: boolean = true;
  score:number[]=[];
  name:String[]=[];
  color:String[]=[];
  showSpinner:boolean=true;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,private employeesService:EmployeeService,private excelService: ExcelService,private location:Location) {
    this.toastr.setRootViewContainerRef(vcr);
   }

   someToaster()
   {
     this.showSuccess();
   }
  
   
 showSuccess() {
console.log("hi");

   this.toastr.success('You are awesome!', 'Success!');
   console.log("done");
   
 }

 showError() {
   this.toastr.error('This is not good!', 'Oops!');
 }

 showWarning() {
   this.toastr.warning('You are being warned.', 'Alert!');
 }

 showInfo() {
   this.toastr.info('Just some information for you.');
 }
 
 showCustom() {
   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
 }
  ngOnInit() {
    this.getEmployees();
  }

  back()
  {this.location.back();
    //window.location.back();
  }

 
   
 
  idSort()
  {
    if(this.dateFlag === true){
      console.log("hi desc");
      
      this.dateFlag = false;
      this.employees.sort(function (a, b) {
              if (a.employeeId < b.employeeId)
                return 1;
              if (a.employeeId > b.employeeId)
                return -1;
              return 0;
            });
    }else {
      console.log("hi asc");
      this.dateFlag = true;
      this.employees.sort(function (a, b) {
        if (a.employeeId < b.employeeId)
          return -1;
        if (a.employeeId > b.employeeId)
          return 1;
        return 0;
      });  
    }
  }
  dateSort(): void {
    if(this.dateFlag === true){
      console.log("hi desc");
      
      this.dateFlag = false;
      this.employees.sort(function (a, b) {
              if (a.employeeJoiningDate < b.employeeJoiningDate)
                return 1;
              if (a.employeeJoiningDate > b.employeeJoiningDate)
                return -1;
              return 0;
            });
    }else {
      console.log("hi asc");
      this.dateFlag = true;
      this.employees.sort(function (a, b) {
        if (a.employeeJoiningDate < b.employeeJoiningDate)
          return -1;
        if (a.employeeJoiningDate > b.employeeJoiningDate)
          return 1;
        return 0;
      });  
    }
  }


  

  getEmployees()
  {
    this.employeesService.getEmployees().subscribe(e=>{
      this.showSpinner=false;
      this.employees=e;
      console.log(this.employees);
      this.employees.forEach(element=>
      {
this.score.push(element.employeeScore);
this.name.push(element.employeeName);
this.color.push(this.getTestColor());


      });
      console.log(this.score);
      console.log(this.name);
      console.log(this.color);
      
      
      
    })
 }

 dynamicColors = function () {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};


getRandomColor() {
  // hexa decimal is 16 digit 
  // out of 16 digit number each time it will randomly choose a letter or a digit 
  var letters = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++) {


    color += letters[Math.floor(Math.random() * 16)];
    //for eg:
    console.log(i);//0 //1 //2 //3 //4 //5
    console.log(color);//E (first time) //5 //A //F //9 //5


  }//once one color is complete that is it  reaches a valid color hex code it  will return to function called
  return color;
}
 getTestColor()
{
  //different shades
  //smaller code 

  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  console.log(randomColor);
  
  return randomColor;
}
 public pieChartType: string = 'pie';

 
  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);


  }

 exportToExcel(event?) {

this.employeesService.getEmployees().subscribe(p=>
{
  this.employees=p;
  console.log(this.employees);
  
  this.excelService.exportAsExcelFile(this.employees,'employeesData');
})
  
  
}


  // Pie
  public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales'
  ];
  public pieChartData: number[] = [100, 200, 200, 100, 233, 456, 1, 2, 490];


}
