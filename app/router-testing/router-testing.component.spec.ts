import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AppComponent, HomeComponent, SearchComponent, routes } from './router-testing.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location} from '@angular/common';

describe('RouterTestingComponent', () => {
  let router :Router;
  let location: Location;
  let fixture;

beforeEach(() => {
  TestBed.configureTestingModule({
    //router set up RouterTestingModule
    imports: [RouterTestingModule.withRoutes(routes)],
    declarations: [ 
      HomeComponent,
      SearchComponent,
      AppComponent
    ]
  });
  router = TestBed.get(Router); 
  location = TestBed.get(Location); 

  fixture = TestBed.createComponent(AppComponent); 
  router.initialNavigation();

});
it('navigate to "" redirects you to /home', fakeAsync(() => { 
  router.navigate(['']); 
  tick(); 
  expect(location.path()).toBe('/home'); 
}));

it('navigate to "search" redirects you to /search', fakeAsync(() => { 
  router.navigate(['search']); 
  tick(); 
  expect(location.path()).toBe('/search'); 
}));
});

