import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoursedate]'
})
export class CoursedateDirective implements OnInit {

  // will be in format 09.09.2021
  @Input() courseDate: string;

  constructor(private element: ElementRef) { }

  ngOnInit () {
  	const currentDate = new Date();
    const dateTwoWeeksAgo = currentDate.setDate(currentDate.getDate()-14)
    const courseItemDate = new Date(this.courseDate).getTime();


    console.log('currentDate', currentDate)
    // will be in format Thu Nov 04 2021 16:29:11 GMT+0200 (Eastern European Standard Time)

    console.log('dateTwoWeeksAgo', dateTwoWeeksAgo)
    // will be in format 1635627600000

    console.log('courseItemDate', courseItemDate)
    // will be in format 1634822807995

  	if (courseItemDate > dateTwoWeeksAgo) {
     this.element.nativeElement.style.borderColor = 'green';
  	}

  }

}
