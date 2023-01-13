import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee, EmployeeSearchCriteria } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  
  Employees: Employee[];
  selectedValue: string = '';
  
  constructor(private service: EmployeeService){}
  
  getEmployees(criteria: EmployeeSearchCriteria){
    this.Employees = this.service.getEmployees(criteria);
  }
  
  onSorted($event){
    this.getEmployees($event);
  }
  
  onChange($event) {
    let value = $event.target.value;
    this.getEmployees({sortColumn: value, sortDirection: 'ascending'});
    this.selectedValue = $event.target.options[$event.target.selectedIndex].text;
  }

  ngOnInit(){
    this.getEmployees({sortColumn: 'default', sortDirection:'ascending'});
    this.selectedValue = 'Sort Table By';
  }

}