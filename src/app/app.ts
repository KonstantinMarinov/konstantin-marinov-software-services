import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageNavigation } from './page-navigation/page-navigation';

@Component({
  selector: 'app-root',
  imports: [PageNavigation, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
