import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css'],
})
export class NewExamComponent implements OnInit {
  constructor(
    private examService: ExamService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  examId: any;
  exam: any;
  ngOnInit(): void {
    this.examId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.examId != 0) {
      this.examService.getExamOnlyById(this.examId).subscribe({
        next: (response) => {
          console.log(response);
          this.exam = response;
          this.getName.setValue(this.exam.name);
          this.getImage.setValue(this.exam.image);
          this.getDescription.setValue(this.exam.description);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  examForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl(''),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  get getName() {
    return this.examForm.controls['name'];
  }
  get getImage() {
    return this.examForm.controls['image'];
  }
  get getDescription() {
    return this.examForm.controls['description'];
  }
  formHandler(e: any) {
    console.log(e.target);

    e.preventDefault();
    console.log(this.examForm);
    if (this.examForm.status == 'VALID') {
      if (this.examId == 0) {
        this.examService.addExam(this.examForm.value).subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigate(['/exams']);
          },
          error: (error) => {
            console.log(error);
          },
        });
      } else {
        this.examService.editExam(this.examId, this.examForm.value).subscribe({
          next: (data) => {
            console.log('ok');
            console.log(data);
            this.router.navigate(['/exams']);
          },
          error: (error) => {
            console.log('error');
            console.log(error);
          },
        });
      }
    } else {
      console.log('not valid');
    }
  }
}
