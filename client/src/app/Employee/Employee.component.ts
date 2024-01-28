import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employee.component.html',
  styleUrl: './Employee.component.scss'
})
export class EmployeesComponent implements OnInit {

  Employees: any = [];

  
  constructor(private http: HttpClient , private router:Router) {
  }
  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees() {
    this.http.get('http://localhost:3000/Employees').subscribe({
      next: (res: any) => {
        console.log(res);

        this.Employees = res.Employees;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  

  deleteEmployee(id: any) {
    this.http.delete('http://localhost:3000/Employees/' + id).subscribe({
      next: (res: any) => {
        this.getEmployees();
      },
      error: (err: any) => {
      },
    });
  }
  goToAddEmployee() {
    this.router.navigate(['/addEmployee']);
  }
}