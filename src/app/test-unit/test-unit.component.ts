import { Component, OnInit } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-test-unit',
  templateUrl: './test-unit.component.html',
  styleUrls: ['./test-unit.component.scss']
})
export class TestUnitComponent implements OnInit {
  title = 'Hola testing';

  constructor() {
    
  }

  ngOnInit() {
    this.testPromise();
  }

  par(num: number){
    return num%2 === 0 ? true : false;
  }

  testPromise() {
    let model = {
      name: 'pedro',
      lastName: 'Perez'
    }
    return new Promise((resolve) => resolve(model));
  }

  suma(a: number, b: number){
    return a + b;
  }

  getDate(){
    let date = new Date()
    let day = date.getDay();
    let year = date.getFullYear();
    let month = date.getMonth()
    return day + '/' + month + '/' + year;
  }
}
