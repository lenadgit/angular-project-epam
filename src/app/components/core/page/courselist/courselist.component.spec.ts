import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistComponent } from './courselist.component';

describe('CourselistComponent', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(compiled.querySelector('h2').textContent).toContain('Video course'); //expect - функція очікування, очікується що у селектора Н2 є тект Video course (такий текст там є насправді)
  
  });

  it('should create', () => {
    expect(CourselistComponent).toBeTruthy();//очікується що компонент CourselistComponent існує.
  });

  const compiled = fixture.debugElement.nativeElement; // y fixture передається сутність Ангуляра, викликається поле debugElement і присвоюється інстанс nativeElement

  expect(CourselistComponent.button).toEqual('Edit');// очікується що у клмпонента є елемент button значення якого Edit
});
