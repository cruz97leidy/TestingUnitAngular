import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  external: any;
  form: any;
  person = {
    'name': '',
    'lastName': ''
  }
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      'name': new FormControl(this.person.name, [Validators.required]),
      'lastName': new FormControl(this.person.lastName, [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.form);
  }

}
