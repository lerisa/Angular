import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { StartComponent } from './start/start.component';
import { ExcelService } from './excel.service';
import { ChartsModule } from 'ng2-charts';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastsManager } from 'ng2-toastr';
import {ToastModule} from 'ng2-toastr';
// import { ChartistModule } from 'ng-chartist';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
// import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { ParentComponent } from './parent/parent.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    StartComponent,
    LoginComponent,
    ParentComponent,
    // ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component
  ],
  imports: [
    // ChartistModule ,BrowserAnimationsModule,,NgbModule.forRoot()
    ToastModule.forRoot(), BrowserModule, FormsModule, AppRoutingModule, ChartsModule,BrowserAnimationsModule,NgbModule.forRoot()

  ],
  providers: [EmployeeService, ExcelService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
