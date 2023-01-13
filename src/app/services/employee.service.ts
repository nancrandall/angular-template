import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  
  getEmployees(criteria: EmployeeSearchCriteria): Employee[] {

    let response;

    if (criteria.sortColumn === 'default') {
      // default order
      response = this._mockEmployees;
      return response;
    } else if (criteria.sortColumn === 'date') {
      // by date
      response = this._mockEmployees.sort((a,b) => {
        if (criteria.sortDirection === 'ascending'){
          return +a['timestamp'] - +b['timestamp'];
        }
        else {
          return +b['timestamp'] - +a['timestamp'];
        }
      });
      return response;
    } else {
      // alphanumeric
      response = this._mockEmployees.sort((a,b) => {
        if (criteria.sortDirection === 'ascending'){
          return a[criteria.sortColumn].localeCompare(b[criteria.sortColumn]);
        }
        else {
          return b[criteria.sortColumn].localeCompare(a[criteria.sortColumn]);
        }
      });
      return response;
    }

  }
    
  
  private _mockEmployees = [
    {
      name: "Rob Derhak",
      salary: "74,500",
      extension: "1159",
      date: "11/17/98",
      timestamp: "911260800000"
    },
    {
      name: "Chuck Garvey",
      salary: "96,000",
      extension: "1056",
      date: "11/21/98",
      timestamp: "911606400000"
    },
    {
      name: "Al Schnier",
      salary: "92,000",
      extension: "4653",
      date: "06/07/08",
      timestamp: "1212796800000"
    },
    {
      name: "Vinnie Amico",
      salary: "47,000",
      extension: "9844",
      date: "12/16/14",
      timestamp: "1418688000000"
    },
    {
      name: "Jim Loughlin",
      salary: "55,000",
      extension: "7745",
      date: "04/20/00",
      timestamp: "956188800000"
    }
  ]

}

export class Employee {
  name: string;
  salary: string;
  extension: string;
  date: string;
  timestamp: string;
}

export class EmployeeSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}