import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing'
import { Router, RouterOutlet,ActivatedRoute } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestService } from './../services/test.service';
import { of, defer } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: TestService
  const mockRouter = {
    navigate: jasmine.createSpy()
  }
  const testData ={ "getInfo":function () {return defer(()=>Promise.resolve(
    [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    
  }]
  ))}}
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        LoginComponent,
        {provide: TestService, useValue: testData},
        { provide: Router, useValue: mockRouter }
      ]
    })
    component = TestBed.get(LoginComponent);
    service = TestBed.get(TestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go principal', async(() => { 
    component.redirectPrincipal();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/principal']);
  }));

  it('Can test error mockService', fakeAsync(() =>{
    spyOn(service, 'getInfo').and.returnValue(defer(()=>Promise.reject('error')))
    component.ngOnInit()
    tick()
    expect(component.listOfUsers).toEqual('error');
  }))

  it('Can test suscribe mockService', fakeAsync(() =>{
    component.mockServices()
    tick()
    expect(component.listOfUsers.length).toBeGreaterThan(0);
  }))

  
});
