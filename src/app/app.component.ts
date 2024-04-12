import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {DrawsComponent} from "./draws/draws.component";
import {DRAWS} from "../db-data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    DrawsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'My Experiment Page';
  draw01 = DRAWS[0]
  draw02 = DRAWS[1]
  draw03 = DRAWS[2]
  draw04 = DRAWS[3]
  draw05 = DRAWS[4]
  draw06 = DRAWS[5]
  draw07 = DRAWS[6]
  draw08 = DRAWS[7]
  draw09 = DRAWS[8]

}
