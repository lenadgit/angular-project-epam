import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseauthorsComponent } from './courseauthors.component';

describe('CourseauthorsComponent', () => {
  let component: CourseauthorsComponent;
  let fixture: ComponentFixture<CourseauthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseauthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
