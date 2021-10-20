import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
    name: string;
  	courses: any[];
  	courseText: string;
  	idCourse: number;
  	heading: string;
  	text: string;
    done: boolean;

    courseFilter: any = { heading: '' };

  constructor() { }

  ngOnInit() {
  	this.courseText = '';
  	this.idCourse = 1;  	

  	this.courses = [
      {heading: 'Angular', text:'Learn Angular online at your own pace. Start today and improve your skills. Join millions of learners already learning on Udemy. 30-day satisfaction guarantee. Stack Implementation.',  id:1, priority: '', done: true},
      {heading: 'JS Basic', text:'Become a Web Development Pro with these valuable skills. Find the right instructor for you. Choose from many topics, skill levels, and languages. 30-Day Money Guarantee.', id:2, priority: '', done: false},
      {heading: 'JS Advanced', text:'Learn JavaScript online at your own pace. Start today and improve your skills. Join millions of learners from around the world already learning on Udemy. Lifetime Access.', id:3, priority: '', done: false},
      {heading: 'React', text:'Free Courses. Glitch: React Starter Kit - A free, 5-part video course with interactive code examples that will help you learn React.', id:4, priority: '', done: false},
      {heading: 'NodeJS', text:'Learn NodeJS online at your own pace. Start today and improve your skills. Join millions of learners from around the world already learning on Udemy. Download To Your Phone.', id:5, priority: '', done: false}
    ];

  }

    addEl() {
      this.courses = [...this.courses, {id: this.idCourse, heading: this.heading, text: this.text}];  
      this.idCourse = this.idCourse++;
      //this.courses.length = this.idCourse++;
      console.log(this.courses);
    } 

    deleteEl(id: number) {
      this.courses = this.courses.filter(course => course.id !== id);
  } 

}
