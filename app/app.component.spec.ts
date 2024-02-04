import { TestBed } from '@angular/core/testing';
import { AppComponent, AuthService } from './app.component';
import { DefaultPipe } from './app.module.pipe';


describe('Hello world', () =>{
  let expected ="";
  let service: AuthService;
  let pipe : DefaultPipe;

beforeEach(() => {
    expected = "Hello World!";
    service= new AuthService();
    pipe= new DefaultPipe();
});
afterEach(() => {
    expected="";
    service= null as any;
    localStorage.removeItem('token');
});

it('says hello 1', () =>{                                                   //1
    expect(helloWorld()).toEqual(expected);
});
/* 
fit('says hello 2', () =>{
  expect(helloWorld()).toEqual(expected);                                   
}); */

xit('says hello 3', () =>{                                                   //2
  expect(helloWorld()).toEqual(expected);
});
it('return true', () => {                                                    //3
  localStorage.setItem('token', '1234');
  expect(service.isAuthenticated()).toBeTruthy();
});
it('return true', () => {
 // localStorage.setItem('token', '1234');                                    //4
  expect(service.isAuthenticated()).toBeFalsy();
});

it('providing no value returns fallback', () => {                                  //5
  expect(pipe.transform('', 'http://place-hold.it/300',false)).toBe('http://place-hold.it/300')
});

});

function helloWorld() {
  return 'Hello World!';
  
}



