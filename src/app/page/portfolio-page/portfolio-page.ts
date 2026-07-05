import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss'
})
export class PortfolioPage {
  protected readonly projects = [
    {
      title: 'Movies with Gope',
      url: 'https://movies-with-gope.vercel.app/',
      description:
        'A movie browsing experience built around quick discovery, clean presentation, and simple navigation through film content.'
    },
    {
      title: 'Forever Growing Nightmares',
      url: 'https://forever-growing-nightmares.vercel.app/',
      description:
        'An atmospheric interactive project with a darker visual direction, designed to create a memorable and story-driven web experience.'
    },
    {
      title: 'Guitar Shop Demo',
      url: 'https://guitar-shop-demo.vercel.app/',
      description:
        'A polished ecommerce-style demo for browsing guitars, presenting products clearly, and shaping a straightforward shopping flow.'
    },
    {
      title: 'Project Mia Dent',
      url: 'https://project-qseu4.vercel.app/',
      description:
        'A compact web project focused on fast loading, direct interaction, and a simple interface that gets out of the user\'s way.'
    }
  ];
}
