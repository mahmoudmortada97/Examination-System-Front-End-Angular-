import { AuthService } from 'src/app/Services/auth.service';
import { ExamService } from './../../Services/exam.service';
import { Router } from '@angular/router';
import { Exam, Question } from './../../Interfaces/exam';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-exams',
  templateUrl: './take-exams.component.html',
  styleUrls: ['./take-exams.component.css'],
})
export class TakeExamsComponent implements OnInit {
  selectedChoice: string = '';
  currentIndex: number = 0;
  grade: number = 0;
  Error: boolean = false;
  ExamId: number = 0;
  userName: any;
  StudentID: any;

  //!!!! Make It Static For Now

  Exams: any = [];
  currentQuestion: any = 0;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private examService: ExamService,
    private AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.StudentID = this.userName = this.AuthService.userData._value.nameid;
    console.log(this.StudentID);

    this._activatedRoute.params.subscribe((params) => {
      this.ExamId = Number(params['id']);
    });
    this.examService.getExamById(this.ExamId).subscribe({
      next: (data) => {
        this.Exams = data;
        this.currentQuestion = this.Exams[0];
      },
    });
  }

  nextQuestion(choice: string) {
    if (choice != '') {
      if (this.currentIndex < this.Exams.length - 1) {
        this.calculateGrade(choice);

        this.currentIndex++;

        this.currentQuestion = this.Exams[this.currentIndex];
      }
      // Empty Selected Choice
      this.selectedChoice = '';
      this.Error = false;
    } else {
      this.Error = true;
    }
  }

  calculateGrade(choice: string) {
    if (this.currentQuestion.answer == choice) {
      this.grade++;
    }
  }

  submitExam(choice: string) {
    if (choice != '') {
      this.calculateGrade(choice);
      this.selectedChoice = '';
      this.Error = false;

      this.examService
        .getGradeByExamID_StudentID(this.ExamId, this.StudentID)
        .subscribe({
          next: (data) => {
            if (data == null) {
              this.postExam();
            } else {
              this.putExam();
            }
          },
        });
    } else {
      this.Error = true;
    }
  }

  postExam() {
    this.examService
      .PostStudentGradeInExam(this.ExamId, this.StudentID, this.grade)
      .subscribe({
        next: (data) => {},
        error: (error) => {},
        complete: () => {
          this._router.navigate(['/showgrade', this.StudentID, this.ExamId]);
        },
      });
  }

  putExam() {
    this.examService
      .PutStudentGradeInExam(this.ExamId, this.StudentID, this.grade)
      .subscribe({
        next: (data) => {},
        error: (error) => {},
        complete: () => {
          this._router.navigate(['/showgrade', this.StudentID, this.ExamId]);
        },
      });
  }
}
