import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Jsonp, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as search from '../actions/search';
import {Observable} from 'rxjs';

@Injectable()
export class GridSearchService {

  server = 'http://127.0.0.1:8100';
  searchURL = this.server + '/yacy/grid/mcp/index/yacysearch.json?query=';
  homepage = 'http://susper.com';
  logo = '../images/susper.svg';
  constructor(private http: Http,
              private jsonp: Jsonp,
              private store: Store<fromRoot.State>) {
  }

  getSearchResults(searchquery) {  
    return this.http
      .get(this.searchURL+searchquery).map(res =>
          res.json()
      ).catch(this.handleError);

  }

  private handleError (error: any) {
    // In some advance version we can include a remote logging of errors
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // Right now we are logging to console itself
    return Observable.throw(errMsg);
  }
}
