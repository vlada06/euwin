import {Component, Input} from '@angular/core';
import {Draw} from "../../model/draw";

@Component({
  selector: 'app-draws',
  templateUrl: './draws.component.html',
  standalone: true,
  styleUrl: './draws.component.css'
})
export class DrawsComponent {

  @Input()
    // draw: Draw;
  draw: Draw | any;

  constructor() {
  }

  ngOnInit() {
  }
}
