import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/auth/courses.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  public currentCourse;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {}

  public ngOnInit(): void {
  	this.getCourseview();
  }

  public getCourseview(): void {
    this.route.params.subscribe(course => {
      this.currentCourse = this.findCurrentCourse(+course.id);
    });
  }

  public findCurrentCourse(id: number) {
    return this.coursesService.getCoursesList().find(course => course.id === id);
  }
}
