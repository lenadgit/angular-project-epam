import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedurationComponent } from './courseduration.component';

describe('CoursedurationComponent', () => {
  let component: CoursedurationComponent;
  let fixture: ComponentFixture<CoursedurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
