import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
