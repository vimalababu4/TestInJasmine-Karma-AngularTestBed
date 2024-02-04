import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { TestAsynchronousCodeComponent } from './test-asynchronous-code.component';
import { AuthServiceAsync } from '../app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('TestAsynchronousCodeComponent', () => {
  let component: TestAsynchronousCodeComponent;
  let fixture: ComponentFixture<TestAsynchronousCodeComponent>;
  let authService: AuthServiceAsync;
  let el: DebugElement; 

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [],
      providers: [AuthServiceAsync]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(TestAsynchronousCodeComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthServiceAsync);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a')); 
  });
  //jasmine way- jasmine spy mechanism -when promise has been resolved
    it('login button hiddern when user authenticated---1',(done) => {
      //expect(el.nativeElement.textContent.trim()).toBe('');
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
      component.ngOnInit();
      spy.calls.mostRecent().returnValue.then(() => {
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
        done();
      })    
  });
  //async and  fixture whenstable method m
  it('login button hiddern when user authenticated--2',async(() => {
    //expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    
    })
  }));
// fake async and tick function, no callback
it('login button hiddern when user authenticated--3',fakeAsync(() => {
  //expect(el.nativeElement.textContent.trim()).toBe('');
  fixture.detectChanges();
  expect(el.nativeElement.textContent.trim()).toBe('Login');
  spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
  component.ngOnInit();
  tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
}));
});