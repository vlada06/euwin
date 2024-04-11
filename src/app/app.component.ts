import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {DrawsComponent} from "./draws/draws.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      DrawsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'euwin';
}
