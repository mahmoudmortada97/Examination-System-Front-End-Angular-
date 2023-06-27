import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGradeComponent } from './show-grade.component';

describe('ShowGradeComponent', () => {
  let component: ShowGradeComponent;
  let fixture: ComponentFixture<ShowGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
