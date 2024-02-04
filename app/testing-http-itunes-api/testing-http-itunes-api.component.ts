import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {Component, Injectable, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
//import  'rxjs/add/operator/toPromise';

class SearchItem {
  constructor(
    public name: string,
    public artist: string,
    public thumbnail: string,
    public artistId: Number
  ) {}
}

@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string) {
    return new Promise<void>((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (res:any)=> {
            // Success
            this.results = res.results.map((item:any) => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.artworkUrl60,
                item.artistId
              );
            });
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
  }
} 


@Component({
  imports: [CommonModule, FormsModule,RouterModule,SearchComponent],

})

export class SearchComponent{
  loading: boolean = false;

 constructor(
   public itunes: SearchService,
   private route: ActivatedRoute,
   private router: Router
 ) {
   this.route.params.subscribe(params => {
     console.log(params);
     if (params["term"]) {
       this.doSearch(params["term"]);
     }
   });
 }

 doSearch(term: string) {
   this.loading = true;
   this.itunes.search(term).then(_ => (this.loading = false));
 }

 onSearch(term: string) {
   this.router.navigate(["search", { term: term }]);
 }
}


const routes:Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'find', redirectTo: 'search'}, 
	{path: 'search/:term', component: SearchComponent},
  {path: 'search', component: SearchComponent}
];

@Component({
  selector: 'app-testing-http-itunes-api',
  standalone: true,
  imports: [CommonModule,     
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule],
  templateUrl: './testing-http-itunes-api.component.html',
  styleUrl: './testing-http-itunes-api.component.css',
})
export class TestingHttpItunesApiComponent{

}


 @NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [],
  bootstrap: [TestingHttpItunesApiComponent],
  providers: [SearchService]//,OnlyLoggedInUsersGuard,AlwaysAuthGuard, UserService,AlwaysAuthChildrenGuard]
})
 class AppModule {}
/*
platformBrowserDynamic().bootstrapModule(AppModule);  */