import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ExamService {
  baseUrl: string = 'https://localhost:44391/api/';

  constructor(private httpClient: HttpClient) {}

  getExams() {
    return this.httpClient.get(this.baseUrl + 'Exam');
  }
  getExamById(id: number) {
    return this.httpClient.get(`${this.baseUrl}Exam/${id}`);
  }

  PostStudentGradeInExam(examId: number, studentId: string, grade: number) {
    return this.httpClient.post(`${this.baseUrl}Grade`, {
      examId: examId,
      studentId: studentId,
      grade: grade,
    });
  }
  PutStudentGradeInExam(examId: number, studentId: string, grade: number) {
    return this.httpClient.put(
      `${this.baseUrl}Grade/students/${studentId}/exams/${examId}`,
      {
        examId: examId,
        studentId: studentId,
        grade: grade,
      }
    );
  }
  getExamOnlyById(id: any) {
    return this.httpClient.get(`${this.baseUrl}Exam/getexam/${id}`);
  }
  editExam(id: any, exam: any) {
    return this.httpClient.put(`${this.baseUrl}Exam/${id}`, exam);
  }
  deleteExam(id: any) {
    return this.httpClient.delete(`${this.baseUrl}Exam/${id}`);
  }

  getGradeByExamID_StudentID(examId: number, studentId: string) {
    return this.httpClient.get(
      `${this.baseUrl}grade/students/${studentId}/exams/${examId}`
    );
  }

  addExam(exam: any) {
    return this.httpClient.post(`${this.baseUrl}Exam`, exam);
  }

  addQuest(quest: any) {
    return this.httpClient.post(`${this.baseUrl}Question`, quest);
  }

  deleteQuestion(id: number) {
    return this.httpClient.delete(`${this.baseUrl}Question?Id=${id}`);
  }

  getStudentsGrade(examId: number) {
    return this.httpClient.get(`${this.baseUrl}Grade/${examId}`);
  }
}
