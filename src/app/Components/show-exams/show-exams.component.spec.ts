import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExamsComponent } from './show-exams.component';

describe('ShowExamsComponent', () => {
  let component: ShowExamsComponent;
  let fixture: ComponentFixture<ShowExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
