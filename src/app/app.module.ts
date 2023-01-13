import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { EmployeeService } from './services/employee.service';

import { SortService } from './sortable-table/sort.service';
import { SortableTableDirective } from './sortable-table/sortable-table.directive';
import { SortableColumnComponent } from './sortable-table/sortable-column.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SortableTableDirective, SortableColumnComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ EmployeeService, SortService ]
})
export class AppModule { }
