import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyServiceService {

  constructor(private _http: Http) { }

  saveNewCompany(parameter) {
    console.log(parameter)
    return this._http.post('/company/saveNewCompany', parameter).map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data
      } else {
        return false;
      }
    });
  }

  fetchCompanyDetails() {
    return this._http.get('/company/completeCompanyDetails').map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data;
      }
    });
  }
}
