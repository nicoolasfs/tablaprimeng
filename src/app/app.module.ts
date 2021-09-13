import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
