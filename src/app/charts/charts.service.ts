import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class chartsService {
  public result : any;
  constructor(private http: Http) { }

  get() {
  	let chartData = this.http.get('http://localhost/Projects/conn.php').map(result => result);
    console.log(chartData);
    return chartData;
  }
}
