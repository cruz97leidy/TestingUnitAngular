import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUnitComponent } from './test-unit.component';

describe('TestUnitComponent', () => {
  let component: TestUnitComponent;
  let fixture: ComponentFixture<TestUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUnitComponent ]
    })
    .compileComponents();
    component = new TestUnitComponent();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can test number es par', () =>{
    const respuesta = component.par(22);
    expect(respuesta).toBeTruthy();
  })

  it('can test number es impar', () =>{
    const respuesta = component.par(19);
    expect(respuesta).toBeFalsy();
  })

  it("should fetch data asynchronously", async () => {
    const fakedModel = {
      name: 'pedro',
      lastName: 'Perez'
    }
    let spy = spyOn(component , "testPromise").and.returnValue(
      Promise.resolve(fakedModel)
    );
    fixture.detectChanges();
    expect(spy).toBeTruthy();
  });

  it('should test method suma', () =>{
    let method;
    method = component.suma(2,3);
    expect(method).toEqual(5);
    fixture.detectChanges();
    method = component.suma(8,9);
    expect(method).toEqual(17);    
  })

  it('should test method that return a date', () =>{
    let dateMock = new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
    console.log(dateMock);
    let result = component.getDate();
    expect(result).toEqual(dateMock)
  })
});
