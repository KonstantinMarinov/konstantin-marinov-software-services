import { Routes } from '@angular/router';
import { MainPage } from './page/main-page/main-page';
import { PortfolioPage } from './page/portfolio-page/portfolio-page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'portfolio',
    component: PortfolioPage
  }
];
