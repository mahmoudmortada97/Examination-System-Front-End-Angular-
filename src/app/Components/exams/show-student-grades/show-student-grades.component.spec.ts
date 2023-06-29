import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentGradesComponent } from './show-student-grades.component';

describe('ShowStudentGradesComponent', () => {
  let component: ShowStudentGradesComponent;
  let fixture: ComponentFixture<ShowStudentGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentGradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStudentGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
