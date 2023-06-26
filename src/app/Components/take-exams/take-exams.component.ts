import { Router } from '@angular/router';
import { Exam, Question } from './../../Interfaces/exam';
import { Component } from '@angular/core';

@Component({
  selector: 'app-take-exams',
  templateUrl: './take-exams.component.html',
  styleUrls: ['./take-exams.component.css'],
})
export class TakeExamsComponent {
  constructor(private _router: Router) {}
  selectedChoice: string = '';
  currentIndex: number = 0;
  grade: number = 0;
  Error: boolean = false;

  Exams: Exam[] = [
    {
      id: 1,
      name: 'Geographic',
      questions: [
        {
          id: 1,
          title: 'What is the Longest River In the World?',
          choices: ['Nile', 'Forat', 'Elsend', 'Mesesabi'],
          answer: 'Nile',
        },
        {
          id: 2,
          title: 'What is the capital of Italy?',
          choices: ['Venice', 'Florence', 'Rome', 'Naples'],
          answer: 'Rome',
        },
        {
          id: 3,
          title: 'How tall is Mount Everest?',
          choices: ['6,849 m', '7,849 m', '8,849 m', '9,849 m'],
          answer: '8,849 m',
        },
        {
          id: 4,
          title: 'What type of geographical landmark is K2?',
          choices: ['A waterfall', 'A river', 'A mountain', 'A beach'],
          answer: 'A beach',
        },
      ],
    },
  ];
  currentQuestion: any = this.Exams[0].questions[0];

  // previousQuestion() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //     this.currentQuestion = this.Exams[0].questions[this.currentIndex];
  //   }
  // }

  nextQuestion(choice: string) {
    if (choice != '') {
      if (this.currentIndex < this.Exams[0].questions.length - 1) {
        this.calculateGrade(choice);

        this.currentIndex++;

        this.currentQuestion = this.Exams[0].questions[this.currentIndex];
      }
      //? Empty Selected Choice
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
