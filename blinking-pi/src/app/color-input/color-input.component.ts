import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pi-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {

  color = 'goldenrod';

  minLength = 3;

  @Output() onSetColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  log(ev) {
    console.debug(ev);
  }

  setColor(color: string) {
    this.onSetColor.emit(color);
  }

}
