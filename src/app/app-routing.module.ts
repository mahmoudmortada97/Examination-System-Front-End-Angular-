import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LoginComponent } from './Components/login/login.component';
import { ExamsComponent } from './Components/exams/exams.component';
import { TakeExamsComponent } from './Components/take-exams/take-exams.component';
import { ShowExamsComponent } from './Components/show-exams/show-exams.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ShowGradeComponent } from './Components/show-grade/show-grade.component';
import { NewExamComponent } from './Components/exams/new-exam/new-exam.component';
import { NewQuestionComponent } from './Components/exams/new-question/new-question.component';
import { ShowQuestionsComponent } from './Components/exams/show-questions/show-questions.component';
import { AuthGuard } from './Guards/auth.guard';
import { InstructorGuard } from './Guards/instructor.guard';
import { StudentGuard } from './Guards/student.guard';
import { ShowStudentGradesComponent } from './Components/exams/show-student-grades/show-student-grades.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Exam | Home' },
  { path: 'contact', component: ContactComponent, title: 'Exam | Contact Us' },
  { path: 'aboutus', component: AboutUsComponent, title: 'Exam | About Us' },
  { path: 'login', component: LoginComponent, title: 'Exam | Login' },
  { path: 'register', component: RegisterComponent, title: 'Exam | Register' },
  {
    path: 'exams',
    canActivate: [InstructorGuard],
    component: ExamsComponent,
    title: 'Exam | Exams',
  },
  {
    path: 'exam/:id/edit',
    canActivate: [InstructorGuard],
    component: NewExamComponent,
    title: 'Exam |  exam',
  },
  {
    path: 'newquestion/:id',
    canActivate: [InstructorGuard],
    component: NewQuestionComponent,
    title: 'Exam | Add new quest',
  },

  {
    path: 'takeexams/:id',
    canActivate: [StudentGuard],

    component: TakeExamsComponent,
    title: 'Exam | Take Exam',
  },
  {
    path: 'showquestions/:id',
    canActivate: [InstructorGuard],
    component: ShowQuestionsComponent,
    title: 'Exam | Show Exam Questions',
  },
  {
    path: 'showstudentsgrades/:id',
    canActivate: [InstructorGuard],
    component: ShowStudentGradesComponent,
    title: 'Exam | Show Students Grades',
  },
  {
    path: 'showexams',
    canActivate: [StudentGuard],
    component: ShowExamsComponent,
    title: 'Exam | Show Exams',
  },
  {
    path: 'showgrade/:studentId/:examId',
    canActivate: [StudentGuard],
    component: ShowGradeComponent,
    title: 'Exam | Show Grade',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Exam | Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
