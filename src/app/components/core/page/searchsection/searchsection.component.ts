import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchsection',
  templateUrl: './searchsection.component.html',
  styleUrls: ['./searchsection.component.css']
})
export class SearchsectionComponent implements OnInit {
  	courses: object[];
  	courseText: string;
  	idCourse: number;
  	heading: string;
  	text: string;
	
  courseFilter: any = { heading: '' };	
  constructor() { }

  ngOnInit() {
  }

}
