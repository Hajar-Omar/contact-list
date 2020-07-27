import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestingModule { }
