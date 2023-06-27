import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ExamService {
  baseUrl: string = 'https://localhost:7019/api/';

  constructor(private httpClient: HttpClient) {}

  getExams() {
    return this.httpClient.get(this.baseUrl + 'Exam');
  }
  getExamById(id: number) {
    return this.httpClient.get(`${this.baseUrl}Exam/${id}`);
  }

  PostStudentGradeInExam(examId: number, studentId: number, grade: number) {
    return this.httpClient.post(`${this.baseUrl}Grade`, {
      examId: examId,
      studentId: studentId,
      grade: grade,
    });
  }
  PutStudentGradeInExam(examId: number, studentId: number, grade: number) {
    return this.httpClient.put(
      `${this.baseUrl}Grade/students/${studentId}/exams/${examId}`,
      {
        examId: examId,
        studentId: studentId,
        grade: grade,
      }
    );
  }

  getGradeByExamID_StudentID(examId: number, studentId: number) {
    return this.httpClient.get(
      `${this.baseUrl}grade/students/${studentId}/exams/${examId}`
    );
  }
}
