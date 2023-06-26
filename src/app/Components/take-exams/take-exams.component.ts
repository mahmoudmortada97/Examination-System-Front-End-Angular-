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

  Exams: any = [];
  currentQuestion: any = 0;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private examService: ExamService
  ) {}
  ngOnInit(): void {
    let id = 0;
    this._activatedRoute.params.subscribe((params) => {
      id = Number(params['id']);
    });
    this.examService.getExamById(id).subscribe({
      next: (data) => {
        this.Exams = data;
        console.log(this.Exams[0]);
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
    console.log(`Grade: ${this.grade}`);
  }

  submitExam(choice: string) {
    if (choice != '') {
      this.calculateGrade(choice);
      this.selectedChoice = '';
      this.Error = false;

      this._router.navigate(['/home']);
    } else {
      this.Error = true;
    }

    console.log(this.grade);
  }
}
