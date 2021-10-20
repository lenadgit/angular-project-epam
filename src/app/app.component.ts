import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courses';
  searchValue = '';

  public onSearchValue(value: string): void {
    this.searchValue = value;
  }
}
