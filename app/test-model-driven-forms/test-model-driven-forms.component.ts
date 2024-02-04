import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../component-testing/component-testing.component';

@Component({
  selector: 'app-test-model-driven-forms',
  standalone: true,
  imports: [],
  templateUrl: './test-model-driven-forms.component.html',
  styleUrl: './test-model-driven-forms.component.css'
})
export class TestModelDrivenFormsComponent {
  @Output() loggedIn = new EventEmitter<User>();
  //we associate template form element with the model form on our componnet
  form: FormGroup |any;

  constructor(private fb: FormBuilder) {
  }
//initialize form with ngOnIt lifecycle hook
  ngOnInit() { 
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }
//when user submits the form, we call the login() function
  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
          new User(
              this.form.value.email,
              this.form.value.password
          )
      );
    }
  }

}
