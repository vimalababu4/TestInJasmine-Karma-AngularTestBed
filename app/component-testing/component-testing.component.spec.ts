import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTestingComponent, User} from './component-testing.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ComponentTestingComponent', () => {
  let user: User;
  let component: ComponentTestingComponent;
  let fixture: ComponentFixture<ComponentTestingComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(() => {
   
    TestBed.configureTestingModule({
      declarations: []
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ComponentTestingComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });
  it('Setting enabled to false disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
});
it('Entering email and password emits loggedIn event', () => {
 
  loginEl.nativeElement.value ="test@example.com";
  passwordEl.nativeElement.value = "123456";

  component.loggedIn.subscribe((value) =>{ user = value});
  submitEl.triggerEventHandler('click', null);
  expect(user.email).toBe("test@example.com");
  expect(user.password).toBe("123456");
});
});