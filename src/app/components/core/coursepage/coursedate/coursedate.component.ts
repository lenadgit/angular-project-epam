import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursedate',
  templateUrl: './coursedate.component.html',
  styleUrls: ['./coursedate.component.css']
})
export class CoursedateComponent implements OnInit {
  @Input() courseDate;

  constructor() { }

  ngOnInit() {
  }

}
