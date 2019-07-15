import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
describe('TestService', () => {
  let testService: TestService;
  let httpMock: HttpTestingController;
  const testData = [{
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
    }
  }]

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    })
    testService = TestBed.get(TestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })
 
  it('should be created', () => {
    // const service: TestService = TestBed.get(TestService);
    expect(testService).toBeTruthy();
  });

  it('can test getInfo', () =>{
    testService.getInfo().subscribe(data =>{
      expect(data[0].id).toEqual(1);
      expect(data).toEqual(testData);
    })
    let req  = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  })

  it('can test getInfoUserById', () =>{
    let idUser = 1;
    testService.getInfoUserById(idUser).subscribe(data =>{
      expect(data).toEqual(testData);
    })
    let req  = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/' + idUser);
    expect(req.request.method).toBe('GET');
    req.flush(testData); //proporcionar valores ficticios a las peticiones
  })
});
