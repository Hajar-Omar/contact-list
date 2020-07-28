import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  exports: [
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    MatProgressSpinnerModule,
  ],
})
export class TestingModule {}
