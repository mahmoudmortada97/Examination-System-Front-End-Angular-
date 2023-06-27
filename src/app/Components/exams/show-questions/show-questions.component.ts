import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.css'],
})
export class ShowQuestionsComponent implements OnInit {
  examId: any;
  questions: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private examService: ExamService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.examId = this.activatedRoute.snapshot.paramMap.get('id');

    this.examService.getExamById(this.examId).subscribe({
      next: (data) => {
        this.questions = data;
      },
    });
  }
}
