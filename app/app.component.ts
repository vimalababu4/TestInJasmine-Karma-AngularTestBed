import { Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentTestingComponent } from './component-testing/component-testing.component';
import { TestModelDrivenFormsComponent } from './test-model-driven-forms/test-model-driven-forms.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ComponentTestingComponent,TestModelDrivenFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'my-app';


}
export class AuthService{
  isAuthenticated():boolean{
    return !!localStorage.getItem('token');
  }

}
export class AuthServiceAsync{
  isAuthenticated():Promise<boolean>{
    return Promise.resolve(!!localStorage.getItem('token'));
  }
}
