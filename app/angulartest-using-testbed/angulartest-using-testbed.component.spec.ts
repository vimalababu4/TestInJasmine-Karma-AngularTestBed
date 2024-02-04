import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../app.component';
import { AppLoginComponent } from '../app-login/app-login.component';

describe('AngulartestUsingTestbedComponent', () => {
  let component: AppLoginComponent;
  let fixture: ComponentFixture<AppLoginComponent>;
  let service : AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      providers:[AuthService]
    });
    fixture = TestBed.createComponent(AppLoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
  });

  it('needsLogin returns false when the user is not authenticated', () => {  
    spyOn(service,'isAuthenticated').and.returnValue(false);    //1
    expect(component.needsLogin()).toBeTruthy();
  });
  
  it('needsLogin returns false when the user is not authenticated', () => {           //2
    // localStorage.setItem('token', '1234');
    //service.authenticated=true;
    spyOn(service,'isAuthenticated').and.returnValue(true);  
    expect(component.needsLogin()).toBeFalsy();
  });
});
