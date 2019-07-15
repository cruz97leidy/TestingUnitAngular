import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../app/login/login.component';
import { PrincipalComponent } from './../app/principal/principal.component';
import { TestUnitComponent } from './../app/test-unit/test-unit.component';
 
const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'principal', component: PrincipalComponent},
    { path: 'unit', component: TestUnitComponent},
]; 

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);