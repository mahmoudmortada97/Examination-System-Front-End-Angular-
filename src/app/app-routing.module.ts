import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LoginComponent } from './Components/login/login.component';
import { ExamsComponent } from './Components/exams/exams.component';
import { TakeExamsComponent } from './Components/take-exams/take-exams.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Exam | Home' },
  { path: 'contact', component: ContactComponent, title: 'Exam | Contact Us' },
  { path: 'aboutus', component: AboutUsComponent, title: 'Exam | About Us' },
  { path: 'login', component: LoginComponent, title: 'Exam | Login' },
  { path: 'exams', component: ExamsComponent, title: 'Exam | Exams' },
  {
    path: 'takeexams',
    component: TakeExamsComponent,
    title: 'Exam | Take Exam',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
