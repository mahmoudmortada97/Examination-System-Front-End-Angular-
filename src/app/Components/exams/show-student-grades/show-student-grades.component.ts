import { ExamService } from 'src/app/Services/exam.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-student-grades',
  templateUrl: './show-student-grades.component.html',
  styleUrls: ['./show-student-grades.component.css'],
})
export class ShowStudentGradesComponent implements OnInit {
  examId: any;
  StudentsGrades: any;

  constructor(
    private router: Router,
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.examId = this.activatedRoute.snapshot.paramMap.get('id');

    this.examService.getStudentsGrade(this.examId).subscribe({
      next: (data) => {
        this.StudentsGrades = data;
      },
    });
  }
}
