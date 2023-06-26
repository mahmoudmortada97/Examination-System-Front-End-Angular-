import { ExamService } from './../../Services/exam.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/Interfaces/exam';

@Component({
  selector: 'app-show-exams',
  templateUrl: './show-exams.component.html',
  styleUrls: ['./show-exams.component.css'],
})
export class ShowExamsComponent implements OnInit {
  Exams: any = [];
  constructor(private router: Router, private examService: ExamService) {}
  ngOnInit(): void {
    this.examService.getExams().subscribe({
      next: (data) => {
        this.Exams = data;
      },
    });
  }
}
