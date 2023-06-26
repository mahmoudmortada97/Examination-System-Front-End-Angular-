import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeExamsComponent } from './take-exams.component';

describe('TakeExamsComponent', () => {
  let component: TakeExamsComponent;
  let fixture: ComponentFixture<TakeExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
