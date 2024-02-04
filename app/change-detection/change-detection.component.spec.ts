import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionComponent } from './change-detection.component';
import { AuthService } from '../app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChangeDetectionComponent', () => {

  let component: ChangeDetectionComponent;
  let fixture: ComponentFixture<ChangeDetectionComponent>;
  let authService: AuthService;
  let el: DebugElement; 

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ChangeDetectionComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a')); 
  });
    it('login button hiddern when user authenticated',() => {
      expect(el.nativeElement.textContent.trim()).toBe('');
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    
  });
});
