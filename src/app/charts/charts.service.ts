import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class chartsService {
  public result : any;
  public chartType;
  public selectionType;
  constructor(private http: Http) { 

  }


  getParams(chartType, selType) {
  	this.chartType = chartType;
  	this.selectionType = selType;
  }
  get() {
  	console.log("chartType" + this.chartType);
  	console.log("selectionType"+this.selectionType);
  	let chartData = this.http.get("http://localhost/Projects/OEApis/classes/OE-Api.php?chartType="+this.chartType+
  		"&selectionType="+this.selectionType+"").map(result => result);
    //console.log(chartData);
    return chartData;
  }
}
