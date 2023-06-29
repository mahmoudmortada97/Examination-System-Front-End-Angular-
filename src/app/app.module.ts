import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { LoginComponent } from './Components/login/login.component';
import { ExamsComponent } from './Components/exams/exams.component';
import { TakeExamsComponent } from './Components/take-exams/take-exams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowExamsComponent } from './Components/show-exams/show-exams.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ShowGradeComponent } from './Components/show-grade/show-grade.component';
import { NewExamComponent } from './Components/exams/new-exam/new-exam.component';
import { NewQuestionComponent } from './Components/exams/new-question/new-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowQuestionsComponent } from './Components/exams/show-questions/show-questions.component';
import { ShowStudentGradesComponent } from './Components/exams/show-student-grades/show-student-grades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    SubjectsComponent,
    LoginComponent,
    ExamsComponent,
    TakeExamsComponent,
    ShowExamsComponent,
    RegisterComponent,
    NotFoundComponent,
    ShowGradeComponent,
    NewExamComponent,
    NewQuestionComponent,
    ShowQuestionsComponent,
    ShowStudentGradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
