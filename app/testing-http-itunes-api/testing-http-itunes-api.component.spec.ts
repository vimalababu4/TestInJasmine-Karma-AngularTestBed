

import { TestBed, fakeAsync,tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http'
import { BaseRequestOptions,Http,HttpModule,RequestOptions,Response, ResponseOptions} from "@angular/http/";
import { SearchService } from './testing-http-itunes-api.component';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';


describe('TestingHttpItunesApiComponent', () => {
  let service: SearchService;
  let httpTestingController : HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ],
          providers: [ SearchService]
        
          });
          // Returns a service with the MockBackend so we can test with dummy responses
          service = TestBed.get(SearchService);
           // Inject the http service and test controller for each test
           httpTestingController = TestBed.get(HttpTestingController);
        });

        afterEach(() => {
          // After every test, assert that there are no more pending requests.
          httpTestingController.verify();
      });

      it('search should return items', fakeAsync(() =>{
        let fakeResponse={
          "resultCount":1,
          "results":[{
              "artistId": 78500,
              "artistName":"U2",
               "trackName": "Beautiful Day",
               "artworkUrl60": "image.jpg",
            }]};
               // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
            service.search("U2");

            // Expect a call to this URL
            const req = httpTestingController.expectOne(
                "https://itunes.apple.com/search?term=U2&media=music&limit=20"
            );
            // Assert that the request is a GET.
            expect(req.request.method).toEqual("GET");
            // Respond with this data when called
            req.flush(fakeResponse);

            // Call tick whic actually processes te response
            tick();
            //run tests
            expect(service.results.length).toBe(1); 
            expect(service.results[0].artist).toBe("U2");
            expect(service.results[0].name).toBe("Beautiful Day");
            expect(service.results[0].thumbnail).toBe("image.jpg");
            expect(service.results[0].artistId).toBe(78500);
        
      }));

});