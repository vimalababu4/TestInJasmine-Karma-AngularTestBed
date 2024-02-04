import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TestDepInjectionComponent } from './test-dep-injection.component';
import { AuthService } from '../app.component';
import { AppLoginComponent } from '../app-login/app-login.component';

class MockAuthService extends AuthService{
  override isAuthenticated():any{
    return 'Mocked';
  }
  }


describe('TestDepInjectionComponent', () => {

    let component: AppLoginComponent;
    let fixture: ComponentFixture<AppLoginComponent>;
    let service : AuthService;
    let componentService: AuthService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations:[],
        providers:[AuthService]
      });

      TestBed.overrideComponent(AppLoginComponent,
        {
          set:{providers:[{provide:AuthService,useClass:MockAuthService}]}
        });

      fixture = TestBed.createComponent(AppLoginComponent);
      component = fixture.componentInstance;
      service = TestBed.get(AuthService);
      componentService = fixture.debugElement.injector.get(AuthService);
    });
 
  it('service injected via inject(...) and TestBed.get(..) should be the same instance', () => {
    inject([AuthService], (injectedservice: AuthService)=>{
      expect(injectedservice).toBe(service);
    });  
  });
  
  it('service injected via inject(...) and TestBed.get(..) should be the same instance', () => {
    inject([AuthService], (injectedservice: AuthService)=>{
      expect(injectedservice).toBe(service);
    });  
  });

  it('service injected via component should be the same instance of MockAuthService', () => {
   
      expect(componentService instanceof MockAuthService).toBeTruthy();

});
});