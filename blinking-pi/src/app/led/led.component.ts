import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit, OnDestroy {

  @Input() color: string;

  @Input() index: number;

  @Output() colorSelected: EventEmitter<number> = new EventEmitter<number>();

  format: string;

  private interval;

  constructor() { }

  ngOnInit() {
    this.format = 'name';
    // this.interval = setInterval(() => console.debug(`${this.index} is blinking`), 2000);
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  /**
   * Handle on click.
   */
  handleClick(ev: MouseEvent) {
    console.debug("I was clicked", this.index);
    this.colorSelected.emit(this.index);
  }

}
