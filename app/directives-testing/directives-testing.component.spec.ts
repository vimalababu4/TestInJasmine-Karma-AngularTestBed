import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, DebugElement, Directive, HostBinding, HostListener } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DirectivesTestingComponent } from './directives-testing.component';


@Component({
  template: `<input class="mytag" type ="text"  hoverfocus>` 
})
class TestHoverFocusComponent {
}
describe('DirectivesTestingComponent', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
   
    TestBed.configureTestingModule({
      declarations: [DirectivesTestingComponent,TestHoverFocusComponent]
    });
      // create component and test fixture
      fixture = TestBed.createComponent(TestHoverFocusComponent);

      // get test component from the fixture
      component = fixture.componentInstance;
      inputEl= fixture.debugElement.query(By.css('.mytag'));
});

 it('hovering over input', () => {
  //fixture.detectChanges();
  inputEl.triggerEventHandler('mouseover', null );
  // trigger change detection so that UI renders and you can access element in next step.
  fixture.detectChanges();
  console.log(inputEl.nativeElement.style.backgroundColor);
  expect(inputEl.nativeElement.style.backgroundColor).toBe('green');

  inputEl.triggerEventHandler('mouseout', null);
  fixture.detectChanges();  
  console.log(inputEl.nativeElement.style.backgroundColor);
  expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
}); 
});
