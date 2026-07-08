import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type Project = {
  title: string;
  url: string;
  previewUrl: SafeResourceUrl;
  description: string;
  mobilePreview: boolean;
};

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss'
})
export class PortfolioPage {
  protected readonly projects: Project[];

  constructor(private readonly sanitizer: DomSanitizer) {
    this.projects = [
      this.createProject(
        'Project Mia Dent',
        'https://project-qseu4.vercel.app/',
        'A compact web project exploring fast loading, direct interaction, and a simple interface that gets out of the user\'s way.'
      ),
      this.createProject(
        'Movies with Gope',
        'https://movies-with-gope.vercel.app/',
        'A movie browsing experience centered on quick discovery, clean presentation, and simple navigation through film content.'
      ),
      this.createProject(
        'Forever Growing Nightmares',
        'https://forever-growing-nightmares.vercel.app/',
        'An atmospheric interactive project with a darker visual direction and a story-driven web experience.'
      ),
      this.createProject(
        'Guitar Shop Demo',
        'https://guitar-shop-demo.vercel.app/',
        'A polished ecommerce-style demo that presents guitars clearly and explores a straightforward shopping flow.'
      )
    ];
  }

  private createProject(title: string, url: string, description: string): Project {
    return {
      title,
      url,
      previewUrl: this.sanitizer.bypassSecurityTrustResourceUrl(url),
      description,
      mobilePreview: false
    };
  }

  protected toggleMobilePreview(project: Project): void {
    project.mobilePreview = !project.mobilePreview;
  }
}
