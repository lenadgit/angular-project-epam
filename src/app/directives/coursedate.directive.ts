import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoursedate]'
})
export class CoursedateDirective implements OnInit {

currentDate = new Date();
creationDate = new Date(2021, 10, 20);

  constructor(private element: ElementRef) { }


  ngOnInit () {
  	if (this.creationDate < this.currentDate && this.creationDate >= (this.currentDate - 1209600)) {
     this.element.nativeElement.style.borderColor = 'green';
  	}
 
  }

}
