import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyServiceService {

  constructor(private _http: Http) { }

  // saveCompany(parameter) {
  //   console.log(parameter)
  //   return this._http.post("/saveCompany", {parameter:parameter}).map(function (data) {
  //     var newData = data.json();

  //     return newData;
  //   });
  // }
  saveNewCompany(parameter) {
    console.log(parameter)
    // let newDat = JSON.stringify(parameter);
    // console.log(newDat)
    return this._http.post('/company/saveNewCompany', parameter).map(function (data) {
      var newData = data.json();

      return newData;
    });
  }
}
