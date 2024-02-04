import { Component, OnInit } from '@angular/core';
import { AuthServiceAsync } from '../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test-asynchronous-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-asynchronous-code.component.html',
  styleUrl: './test-asynchronous-code.component.css'
})
export class TestAsynchronousCodeComponent implements OnInit{
  needsLogin:boolean=true;
  constructor(private auth: AuthServiceAsync){}
  ngOnInit(): void {
     this.auth.isAuthenticated().then((authenticated: any) =>{
      this.needsLogin = !authenticated;
     })
  }

}
