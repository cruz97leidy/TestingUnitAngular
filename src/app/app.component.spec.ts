import { TestBed, async } from '@angular/core/testing';
import { } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { QouteModel } from './../utils/QouteModel';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestService } from './services/test.service';
import { of } from 'rxjs';
xdescribe('AppComponent', () => {
  let component = AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        HttpClientTestingModule
      ]
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'initproyectV8'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('initproyectV8');
  });
});
