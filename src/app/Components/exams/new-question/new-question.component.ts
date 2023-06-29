import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/Services/exam.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css'],
})
export class NewQuestionComponent implements OnInit {
  examId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private examService: ExamService,
    private router: Router
  ) {
    this.examId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  quests: any;
  ngOnInit(): void {
    this.examId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.examId);
    this.examService.getExamById(this.examId).subscribe({
      next: (response) => {
        console.log(this.quests);

        this.quests = response;
        console.log(this.quests);
      },
    });
    this.getexamId.setValue(this.examId);
  }
  qustForm = new FormGroup({
    examId: new FormControl(),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    choice1: new FormControl('', [Validators.required]),
    choice2: new FormControl('', [Validators.required]),
    choice3: new FormControl('', [Validators.required]),
    choice4: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required]),
  });
  get getexamId() {
    return this.qustForm.controls['examId'];
  }
  get getTitle() {
    return this.qustForm.controls['title'];
  }
  get getChoice1() {
    return this.qustForm.controls['choice1'];
  }
  get getChoice2() {
    return this.qustForm.controls['choice2'];
  }
  get getChoice3() {
    return this.qustForm.controls['choice3'];
  }
  get getChoice4() {
    return this.qustForm.controls['choice4'];
  }
  get getAnswer() {
    return this.qustForm.controls['answer'];
  }
  formHandler(e: any) {
    e.preventDefault();
    if (this.qustForm.status == 'VALID') {
      console.log(this.qustForm);

      this.examService.addQuest(this.qustForm.value).subscribe({
        next: (response) => {
          this.UpdateList();
        },
      });
      this.UpdateList();
    }

    this.qustForm.reset();
  }

  UpdateList() {
    this.examService.getExamById(this.examId).subscribe({
      next: (response) => {
        this.quests = response;
        console.log(this.quests);
      },
    });
  }

  confirmDelete(questId: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (confirmed) {
      // Call your API to delete the item
      this.deleteItem(questId);
    }
  }

  deleteItem(questId: number) {
    this.examService.deleteQuestion(questId).subscribe({
      next: (response) => {
        this.UpdateList();
      },
    });
  }
}
