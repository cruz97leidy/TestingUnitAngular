import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { TestUnitComponent } from './test-unit/test-unit.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
// import { CustomInputComponent } from './custom-input/custom-input.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: 'battle-module',
    loadChildren: () => import('./modules/battle/battle.module').then(module => module.BattleModule)
  },
  {
    path: 'search-module',
    loadChildren: () => import('./modules/search/search.module').then(module => module.SearchModule)
  },
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestUnitComponent,
    FormReactiveComponent, 
    // CustomInputComponent, 
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
