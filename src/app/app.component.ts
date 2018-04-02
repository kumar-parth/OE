import { Component ,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() myEvent = new EventEmitter();
  title = 'app';
  selectedChartType = "D1Mn";
  callSelection(event: any) {
  	this.selectedChartType = event.target.value;
  }
  callApi(event : any) {
  		this.myEvent.emit();
  		console.log("API function call");
  }
}
