import { NgModule } from "@angular/core";
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations :  [EmployeeComponent],
    providers :     [],
    imports :       [ CommonModule],
    exports:         [EmployeeComponent]
})
export class EmployeeModule{}