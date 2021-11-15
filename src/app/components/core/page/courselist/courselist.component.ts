import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { COURSES_LIST } from '../../courses-list';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})

export class CourselistComponent implements OnInit, OnChanges {
  @Input() public searchValueResult: string;

  name: string;
  courses: any[];
  courseText: string;
  idCourse: number;
  heading: string;
  text: string;
  done: boolean;
  date: number;

  courseFilter: any = { heading: '' };

  constructor() { }

  ngOnInit() {
  	this.courseText = '';
  	this.idCourse = 1;

  	this.courses = COURSES_LIST;
  }

  addEl() {
    this.idCourse = this.courses.length + 1;
    this.courses = [...this.courses, {id: this.idCourse, heading: this.heading, text: this.text}];
    console.log(this.courses);
  }

  deleteEl(id: number) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  ngOnChanges(changes) {
    if (this.courses) {
      const value = changes.searchValueResult.currentValue;
      this.filterCoursesList(value);
    };
  }

  filterCoursesList(value: string): void {
    this.courses = !!value ? COURSES_LIST.filter((course) => {
      return course.heading.toLowerCase().includes(value);
    }) : COURSES_LIST;
  }
}
