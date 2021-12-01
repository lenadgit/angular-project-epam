import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistComponent } from './courselist.component';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ CourselistComponent ],
    schemas: [NO_ERRORS_SCHEMA]
  })
  .compileComponents();
}));

describe('CourselistComponent', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteEl', () => {
    it('should remove object with provided id from array', () => {
      // Create a mock object for course list
      const courseListMock = [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}, {id: 3, name: 'test3'}]
      // Create expected result object
      const expectedResult = [{id: 2, name: 'test2'}, {id: 3, name: 'test3'}]
      // Assign our created value to component courses
      component.courses = [...courseListMock];
      // Call function with id 1
      component.deleteEl(1);
      // Check if function is working correctly
      expect(component.courses).toEqual(expectedResult);
    });
  })
});
