import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  student = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gpa: '',
    status: ''
  };

  createStudent() {
    console.log(this.student);
  }
}
