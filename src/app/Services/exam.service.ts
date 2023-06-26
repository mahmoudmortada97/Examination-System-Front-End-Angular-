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
}
