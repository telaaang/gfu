import { Component, OnInit } from '@angular/core';
import { LedService } from 'app/shared/led.service';

@Component({
  selector: 'pi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  colors: string[];

  constructor(private service: LedService) { }

  ngOnInit() {
    // this.colors = ['red', 'green', 'blue', 'yellow', 'orange', 'blue', 'pink', 'purple'];
    this.service.getColors().subscribe(colors => this.colors = colors);
    }

  setColor(color: string) {
    this.service.setColor(color).subscribe(result => {this.colors = this.colors.map(() => result)});
  }

}
