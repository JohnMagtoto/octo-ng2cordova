import { Component, AfterViewInit, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app works!';
  battery_level: number = 0;

  constructor(private _zone: NgZone){}

  ngOnInit(){
    console.log("Debug: called ngOnInit");
    window.addEventListener("batterystatus", (ev) =>{
      this._zone.run(() => {
        this.onBatteryStatus(ev);
      })
    }, false);
  }

  ngAfterViewInit(){
    // console.log("Debug: called ngAfterViewInit");
    // window.addEventListener("batterystatus", this.onBatteryStatus, false);
  }

  private onBatteryStatus(status){
    console.log("battery level is : ", status.level);
    this.battery_level = status.level;
  }
}
