import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { GetStudent } from '../../model/student.model';
import { RouterModule, Router } from '@angular/router';

// View model used by the template
export interface ViewStudent {
  id: string;
  name: string;
  course: string;
  yearLevel: number | string;
  age?: number | null;
  email?: string;
  gpa?: number | null;
  enrollment_status?: string;
  created_at?: string;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  private readonly studentsService = inject(StudentsService);
  private readonly router = inject(Router);

  public students = signal<ViewStudent[]>([]);

  ngOnInit(): void {
    this.loadStudents();
  }

  private async loadStudents() {
    try {
      const data = await this.studentsService.getStudents();
      const view = (data || []).map(s => ({
        id: String(s.id),
        name: `${s.first_name} ${s.last_name}`,
        course: s.course ?? '',
        yearLevel: s.year_level ?? '' ,
        age: s.age ?? null,
        email: s.email,
        gpa: s.gpa,
        enrollment_status: String(s.enrollment_status),
        created_at: s.created_at
      } as ViewStudent));

      this.students.set(view);
    } catch (error) {
      console.error('Failed to load students', error);
    }
  }

  public async deleteStudent(studentId: string) {
    try {
      await this.studentsService.deleteStudent(studentId);
      this.students.update(list => list.filter(s => s.id !== studentId));
    } catch (error) {
      console.error('Failed to delete student', error);
    }
  }

  public goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }

  public trackById(index: number, student: ViewStudent) {
    return student.id;
  }
}