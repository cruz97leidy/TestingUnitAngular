import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobattleComponent } from './gobattle.component';

describe('GobattleComponent', () => {
  let component: GobattleComponent;
  let fixture: ComponentFixture<GobattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
