import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'company', component: CompanyComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})


export class AppRoutingModule { }