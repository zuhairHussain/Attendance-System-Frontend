import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../@core/data/data.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './add-student.component.html',
})
export class AddStudentsComponent implements OnInit {

  constructor(private service: DataService) {}

  response;
  private classes = []

  private student = {
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": "",
    "student_class": 1
  }

  ngOnInit(){
    const data = this.service.getClasses()
    .subscribe(data => {
      this.classes = data;
    },
    err => {
      console.log(err)
    });
  }

  addStudent(){
    const data = this.service.addStudents(this.student)
    .subscribe(data => {
      console.log(data)
    },
    err => {
      console.log(err)
      this.response = JSON.stringify(err.error);
    },
  () => {
    this.response = 'Student has been created';
  })
  }

  selectItem(data){
    this.student.student_class = data;
  }
}
