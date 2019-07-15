import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';
import { Router } from '@angular/router';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrincipalComponent]
    })
    component = TestBed.get(PrincipalComponent);
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
