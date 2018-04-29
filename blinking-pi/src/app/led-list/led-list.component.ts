import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit {

  @Input() colors: string[];

  /**
   * Constructor with injection of the Router.
   */
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * Handle the selected color.
   */
  handleColorSelected(index: number) {
    console.debug(`Led no. ${index} was selected`);
    // Use the router to navigate...
    // Die Navigation kann in TS oder HTML durchgeführt werden, siehe led-list.component.html.
    this.router.navigate(['/leds', index]);
  }

}
