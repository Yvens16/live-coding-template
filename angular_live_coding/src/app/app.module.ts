import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';  // <--- HERE template-driven
import { ReactiveFormsModule } from '@angular/forms';// <--- HERE Reactive-forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <--- HERE template-driven
    ReactiveFormsModule // <--- HERE Reactive-forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
