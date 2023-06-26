export interface Exam {
  id: number;
  name: string;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  choices: string[];
  answer: string;
}
