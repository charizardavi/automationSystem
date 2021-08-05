import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) { }
  lightDragging: boolean;
  text = 'OFF';
  temp = '122.9';
  rain = 'Clear'
  ngOnInit() {
    this.getWeather();
    this.updateLightText();
    let timerId = setInterval(() => {
      this.updateLightText();
    }, 3000);
    let timerId2 = setInterval(() => {
      this.getWeather();
    }, 60000);
  }
  getWeather() {
    this.httpService.weather().subscribe((response: any) => {
      this.rain = response.weather[0].description;
      let notTemp = (+response.main.temp - 273.15) * (9 / 5) + 32
      this.temp = notTemp.toFixed(1).toString();
    });

  }
  updateLightText() {
    this.httpService.status().subscribe((res) => {
      console.log(res);
      if (res == "0") {
        this.text = "OFF"
      } else {
        this.text = "ON"
      }
    });
  }
  handleDragStarted() {
    this.lightDragging = true;
  }
  lightClicked() {
    if (this.lightDragging) {
      this.lightDragging = false;
      return
    }
    console.log("click");
    if (this.text == "ON") {
      this.text = "OFF"
      this.httpService.off().subscribe((res) => {
        console.log(res);
      });
    } else {
      this.text = "ON"
      this.httpService.on().subscribe((res) => {
        console.log(res);
      });
    }
  }
}
