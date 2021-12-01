import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	this.getCourseview();
  }

  getCourseview(): void {
    this.route.params.subscribe(courses => course.id);
    //Below was an example
    //.subscribe(heroes => this.heroes = heroes);
  }

}
