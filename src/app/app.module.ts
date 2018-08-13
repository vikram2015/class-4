import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }  from './app.routing';

//these are my custom module
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';


//these are custom service file
import { CompanyServiceService } from './company-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ CompanyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
