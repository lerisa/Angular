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
import { ChartistModule } from 'ng-chartist';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    StartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ChartsModule, ChartistModule,NgbModule.forRoot()

  ],
  providers: [EmployeeService, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
