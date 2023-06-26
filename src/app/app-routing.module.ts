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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Exam | Home' },
  { path: 'contact', component: ContactComponent, title: 'Exam | Contact Us' },
  { path: 'aboutus', component: AboutUsComponent, title: 'Exam | About Us' },
  { path: 'login', component: LoginComponent, title: 'Exam | Login' },
  { path: 'register', component: RegisterComponent, title: 'Exam | Register' },
  { path: 'exams', component: ExamsComponent, title: 'Exam | Exams' },
  {
    path: 'takeexams/:id',
    component: TakeExamsComponent,
    title: 'Exam | Take Exam',
  },
  {
    path: 'showexams',
    component: ShowExamsComponent,
    title: 'Exam | Show Exams',
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
