import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { StudentsService } from "../../services/students.service";
import { CreateStudentPayload } from "../../model/student.model";

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  private readonly studentsService = inject(StudentsService);
  private readonly router = inject(Router);

  // This matches your HTML [(ngModel)]
  student = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    course: '',
    yearLevel: '',
    gpa: '',
    status: '' // Enrollment status
  };

  public async createStudent() {
    const payload: CreateStudentPayload = {
      first_name: this.student.firstName,
      last_name: this.student.lastName,
      email: this.student.email,
      age: this.student.age ? Number(this.student.age) : undefined,
      course: this.student.course || undefined,
      year_level: this.student.yearLevel ? Number(this.student.yearLevel) : undefined,
      gpa: this.student.gpa ? Number(this.student.gpa) : undefined,
      enrollment_status: this.student.status === 'Enrolled' ? 'Active' : 'Inactive'
    } as CreateStudentPayload;

    try {
      await this.studentsService.createStudent(payload);
      await this.router.navigate(['/students']);
    } catch (error: any) {
      console.error('Failed to create student', error);
      console.error('Backend message:', error?.error?.message ?? error?.message);
    }
  }
}