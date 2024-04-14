import {Component, Input} from '@angular/core';
import {Draw} from "../../model/draw";

@Component({
  selector: 'app-draws',
  templateUrl: './draws.component.html',
  standalone: true,
  styleUrl: './draws.component.css'
})
export class DrawsComponent {

  @Input({
    required: true
  })
  draw: Draw | any;

  constructor() {
  }

  ngOnInit() {
  }
}
