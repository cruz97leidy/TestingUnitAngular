import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveComponent } from './form-reactive.component';
import { FormControl, FormGroup, Validators, FormsModule} from '@angular/forms'

describe('FormReactiveComponent', () => {
  let component: FormReactiveComponent;
  let fixture: ComponentFixture<FormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveComponent ],
      imports:[
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('Can that person is different undefined', ()=>{
    expect(component.person).toBeDefined();
  })

  it('Can test that a form is valid', () =>{
    component.form.controls['name'].setValue('Mateo');
    component.form.controls['lastName'].setValue('Restrepo');
    component.form.controls['age'].setValue('24');
    expect(component.form.valid).toBeTruthy();
  })

  it('Can test that a form is invalid', () =>{
    component.form.controls['name'].setValue('');
    component.form.controls['lastName'].setValue('');
    component.form.controls['age'].setValue('');
    expect(component.form.valid).toBeFalsy();
  })
});
