import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms'; 
import { AppComponent } from './app.component';
import { chartComponent } from './charts/charts.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    chartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
