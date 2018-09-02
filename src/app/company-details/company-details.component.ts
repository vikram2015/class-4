import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {


  CompanyList = [];

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit() {
    this.companyService.fetchCompanyDetails().subscribe((data) => {
      console.log(data);
      if (data) {
        this.CompanyList = data;
      }
    })
  }
}
