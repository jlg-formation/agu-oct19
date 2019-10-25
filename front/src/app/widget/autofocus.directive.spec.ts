import { AutofocusDirective } from './autofocus.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  template: '<input type="text" appAutofocus>'
})
class TestComponent {
  constructor() { }
}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
