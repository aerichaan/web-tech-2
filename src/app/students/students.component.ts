import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students = [
    {
      name: 'Akari San',
      course: 'Computer Science',
      yearLevel: '3rd Year'
    },
    {
      name: 'Aeri Chan',
      course: 'Information Technology',
      yearLevel: '2nd Year'
    },
    {
      name: 'Mark Lee',
      course: 'Software Engineering',
      yearLevel: '4th Year'
    }
  ];

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
