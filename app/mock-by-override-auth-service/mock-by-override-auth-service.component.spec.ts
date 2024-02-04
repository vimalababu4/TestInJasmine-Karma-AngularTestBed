import { AppLoginComponent } from '../app-login/app-login.component';
import { AuthService } from '../app.component';

 class MockAuthService extends AuthService{
  authenticated= false;
  override isAuthenticated():boolean{
    return this.authenticated;
  }
}

describe('MockByOverrideAuthComponent', () => {
  let login: AppLoginComponent;
  let service : MockAuthService ;


  beforeEach(async () => {
    service = new MockAuthService();
    login= new AppLoginComponent(service);
   
    });
  afterEach(() => {
    //localStorage.removeItem('token');
    login= null as any;
    service= null as any;
  })

  it('needsLogin returns false when the user is not authenticated', () => {  
    service.authenticated= false;        //1
    expect(login.needsLogin()).toBeTruthy();
  });
  
  it('needsLogin returns false when the user is not authenticated', () => {           //2
    // localStorage.setItem('token', '1234');
    service.authenticated=true;
    expect(login.needsLogin()).toBeFalsy();
  });

});