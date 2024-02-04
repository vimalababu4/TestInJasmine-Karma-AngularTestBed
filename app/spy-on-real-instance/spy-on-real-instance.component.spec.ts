import { AppLoginComponent } from '../app-login/app-login.component';
import { AuthService } from '../app.component';



describe('SpyOnRealObject', () => {
  let login: AppLoginComponent;
  let service : AuthService ;


  beforeEach(async () => {
    service = new AuthService();
    login= new AppLoginComponent(service);
   
    });
  afterEach(() => {
    //localStorage.removeItem('token');
    login= null as any;
    service= null as any;
  })

  it('needsLogin returns false when the user is not authenticated', () => {  
    spyOn(service,'isAuthenticated').and.returnValue(false);    //1
    expect(login.needsLogin()).toBeTruthy();
  });
  
  it('needsLogin returns false when the user is not authenticated', () => {           //2
    // localStorage.setItem('token', '1234');
    //service.authenticated=true;
    spyOn(service,'isAuthenticated').and.returnValue(true);  
    expect(login.needsLogin()).toBeFalsy();
  });

});
