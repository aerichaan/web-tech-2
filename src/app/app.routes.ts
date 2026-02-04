import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];
