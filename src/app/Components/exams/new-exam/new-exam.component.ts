import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css'],
})
export class NewExamComponent {
  constructor(private examService: ExamService, private router: Router) {}
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
      this.examService.addExam(this.examForm.value).subscribe({
        next: (data) => {
          console.log(data);

          this.router.navigate(['/exams']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
