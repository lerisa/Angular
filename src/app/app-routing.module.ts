import { OtherngbComponentsComponent } from './otherngb-components/otherngb-components.component';
import { ApiComponent } from './api/api.component';
import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { AlertComponent } from './alert/alert.component';
import { InfoComponent } from './info/info.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'employees', component: EmployeesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'start', component: StartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'parent2', component: Parent2Component },
    { path: 'parent3', component: Parent3Component },
    { path: 'child2', component: Child2Component },
    { path: 'child3', component: Child3Component },
    { path: 'detail/:id', component: EmployeeDetailComponent },
    { path: 'alert', component: AlertComponent },
    { path: 'info', component: InfoComponent },
    {path:'api',component:ApiComponent},
    {path:'smartTable',component:SmartTableComponent},
    {path:'ngb',component:OtherngbComponentsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
