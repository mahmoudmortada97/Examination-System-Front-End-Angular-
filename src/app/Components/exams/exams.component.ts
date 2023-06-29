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
  confirmDelete(questId: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (confirmed) {
      // Call your API to delete the item
      this.Remove(questId);
    }
  }
  Remove(id: number) {
    this.examService.deleteExam(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllExam();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
