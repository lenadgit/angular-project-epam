import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesaveComponent } from './coursesave.component';

describe('CoursesaveComponent', () => {
  let component: CoursesaveComponent;
  let fixture: ComponentFixture<CoursesaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
