import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineFormComponent } from './components/inlineForm/inline-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InlineFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InlineFormComponent
  ]
})
export class InlineFormModule { }
