import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent {
  subjects: string[] = [
    'Mathematics',
    'Science',
    'Chemistry',
    'Computer',
    'History',
    'Technology',
    'Psychology',
    'Design',
  ];
}
