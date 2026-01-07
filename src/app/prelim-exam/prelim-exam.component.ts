import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-prelim-exam',
  templateUrl: './prelim-exam.component.html',
  styleUrls: ['./prelim-exam.component.scss']
})
export class PrelimExamComponent {
  title = signal('Prelim Exam');
}