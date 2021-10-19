import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchsection',
  templateUrl: './searchsection.component.html',
  styleUrls: ['./searchsection.component.css']
})
export class SearchsectionComponent implements OnInit {
  @Output() public emitSearchValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSearchClick(value: string): void {
    this.emitSearchValue.emit(value)
  }
}
