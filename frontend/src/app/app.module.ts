import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInComponent } from './components/client-in/client-in.component';
import { ClientPrevComponent } from './components/client-prev/client-prev.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { NavComponent } from './components/nav/nav.component';
import { ClientService } from './services/client.service'



@NgModule({
  declarations: [
    AppComponent,
    ClientInComponent,
    ClientPrevComponent,
    ClientListComponent,
    NavComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
