import { ExamService } from './../../Services/exam.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-grade',
  templateUrl: './show-grade.component.html',
  styleUrls: ['./show-grade.component.css'],
})
export class ShowGradeComponent implements OnInit {
  studentGrade: any = 0;
  ExamId: number = 0;
  StudentId: number = 0;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _examService: ExamService
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.ExamId = Number(params['examId']);
      this.StudentId = Number(params['studentId']);

      this._examService
        .getGradeByExamID_StudentID(this.ExamId, this.StudentId)
        .subscribe({
          next: (data) => {
            this.studentGrade = data;
          },
        });
    });
  }
}
