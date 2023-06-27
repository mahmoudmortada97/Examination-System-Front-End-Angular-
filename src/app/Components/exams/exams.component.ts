import { Router } from '@angular/router';
import { Exam, Question } from './../../Interfaces/exam';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
  constructor(private examService: ExamService) {}

  exams: any;
  getAllExam() {
    this.examService.getExams().subscribe({
      next: (response) => {
        this.exams = response;
        console.log(this.exams);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getAllExam();
  }
  Remove(id: number) {}
}
