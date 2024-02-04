import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


export class User {
  constructor(public email: string, public password: string) {
  }
}
@Component({
  selector: 'app-component-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-testing.component.html',
  styleUrl: './component-testing.component.css'
})
export class ComponentTestingComponent {
  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled =true;
  
  login(email: string,password: string){
    console.log('login ${email} ${password}');
    if(email && password){
      console.log('Emitting');
      this.loggedIn.emit(new User(email,password));
    }
  }

}
