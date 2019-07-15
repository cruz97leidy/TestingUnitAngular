import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { CustomInputComponent } from './../../custom-input/custom-input.component';
const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [SearchComponent, CustomInputComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class SearchModule { }
