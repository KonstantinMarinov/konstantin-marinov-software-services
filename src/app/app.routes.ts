import { Routes } from '@angular/router';
import { PortfolioPage } from './page/portfolio-page/portfolio-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portfolio'
  },
  {
    path: 'portfolio',
    component: PortfolioPage
  }
];
