import { Injectable } from '@angular/core';
import { COURSES_LIST } from 'src/app/components/core/courses-list';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesList = COURSES_LIST;

  constructor() { }

  public getCoursesList() {
    return this.coursesList;
  }
}
