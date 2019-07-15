import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  form: any;
  person = {
    'name': '',
    'lastName': '',
    'age': ''
  }
  constructor() { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      'name': new FormControl(this.person.name, [Validators.required]),
      'lastName': new FormControl(this.person.lastName, [Validators.required]),
      'age': new FormControl(this.person.age, [Validators.required]),
    })
  }

}
