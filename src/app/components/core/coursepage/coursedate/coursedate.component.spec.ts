import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedateComponent } from './coursedate.component';

describe('CoursedateComponent', () => {
  let component: CoursedateComponent;
  let fixture: ComponentFixture<CoursedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
