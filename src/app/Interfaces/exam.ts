export interface Exam {
  id: number;
  name: string;
  image: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  choices: string[];
  answer: string;
}
