import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoursedate]'
})
export class CoursedateDirective implements OnInit {


  constructor(private element: ElementRef) { }


  ngOnInit () {
  	const currentDate = new Date();

  	if (currentDate.setDate(currentDate.getDate()-14)) {
     this.element.nativeElement.style.borderColor = 'green';
  	}
 
  }

}
