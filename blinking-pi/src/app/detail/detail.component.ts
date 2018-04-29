import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LedService } from 'app/shared/led.service';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  color: string;

  // only dependency injection in constructor...
  constructor(private route: ActivatedRoute, private service: LedService) { }

  ngOnInit() {
    // Der aus der URL an eine Component übergebene Parameter (aus route injeziert) hat im Params-Object den key index.
    console.debug(this.route.snapshot.params);
    // color wird bewusst immer neu gesetzt (immutable!!!)
    this.service.getColor(this.route.snapshot.params.index).subscribe(c => this.color = c);
  }

}
