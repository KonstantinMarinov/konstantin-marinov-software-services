import { Component } from '@angular/core';
import { PageNavigation } from './page-navigation/page-navigation';

@Component({
  selector: 'app-root',
  imports: [PageNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
