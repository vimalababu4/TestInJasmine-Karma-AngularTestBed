import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginComponent } from './app-login.component';
import { AuthService } from '../app.component';

describe('AppLoginComponent', () => {
  let login: AppLoginComponent;
  let service : AuthService;
  let component: AppLoginComponent;
  let fixture: ComponentFixture<AppLoginComponent>;

  beforeEach(() => {
    service = new AuthService();
    login= new AppLoginComponent(service);
    
    });
  afterEach(() => {
    localStorage.removeItem('token');
    login= null as any;
     service= null as any;
  })

  it('needsLogin returns false when the user is not authenticated', () => {          //1
    expect(login.needsLogin()).toBeTruthy();
  });
  
  it('needsLogin returns false when the user is not authenticated', () => {           //2
    localStorage.setItem('token', '1234');
    expect(login.needsLogin()).toBeFalsy();
  });

});
