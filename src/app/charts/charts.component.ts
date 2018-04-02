import { Component, OnInit, Input } from '@angular/core';
import { chartsService } from './charts.service';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-chart',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  providers: [chartsService]
})
export class chartComponent implements OnInit {

  @Input() selectedChartType:string;
  constructor(private chartsService: chartsService) {}
  
  private chartArr = [];
  private x = [];
  private y = [];
  private data;
  private chartJsonData;
  private values = [];
  private labels = [];
  getChartData(chartType, selectionType) {
    this.chartsService.getParams(chartType, selectionType);
  	this.chartsService.get().subscribe(result => {
        console.log("Result",result['_body']);
        this.chartJsonData = result['_body'];
        this.chartArr = JSON.parse(this.chartJsonData);
        switch(this.chartArr['chartname']) {
            case "BarChart":
                this.renderBarChart();
                break;
            case "StackedBarChart":
                this.renderStackedBarChart();
                break;
            case "PieChart":
                this.renderPieChart();
                break;
           case "DonutChart":
                this.renderDonutChart();
                break;
            default: console.log("no valid chartType");
        }
    });
  }
  
  renderBarChart() {
    this.parseChartData();
    this.data = [{
      x: this.labels,
      y: this.values,
      type: 'bar'
    }];
    Plotly.newPlot('renderChart', this.data);
  }

  renderStackedBarChart() {
    this.parseChartData();
    this.data = [{
      x: this.labels,
      y: this.values,
      type: 'bar'
    }];

    let layout = {
        barmode: 'stack'
    };

    Plotly.newPlot('renderChart', this.data, layout);
  }
  renderPieChart() {
    this.parseChartData();
    this.data = [{
      values: this.values,
      labels:this.labels,
      type: 'pie'
    }];

    let layout = {
      height: 400,
      width: 500
    };

    Plotly.newPlot('renderChart', this.data, layout);
  }

  renderDonutChart() {
    this.parseChartData();
    this.data = [{
      values: this.values,
      labels:this.labels,
      hoverinfo: 'label+percent',
      hole: .4,
      type: 'pie'
    }];
    let layout = {
      title: 'Donot chart',
      height: 600,
      width: 600
    };

    Plotly.newPlot('renderChart', this.data, layout);

  }

  parseChartData() {
    let chartDetail = this.chartArr['chartDetail'];
    for (var i=0; i<chartDetail.length; i++) {
        this.labels.push(chartDetail[i]['userName']);
        this.values.push(chartDetail[i]['countofcases']);
    }
  }

  ngOnInit() {
  	//this.getChartData();
  }

}



