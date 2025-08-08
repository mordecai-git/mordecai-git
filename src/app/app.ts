import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    TranslateModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('mordecai-git');
  private translate = inject(TranslateService);
  private languageService = inject(LanguageService);
  private seoService = inject(SeoService);

  ngOnInit() {
    // Initialize translation service with saved language
    this.languageService.initializeLanguage();

    // Initialize SEO
    this.initializeSeo();
  }

  private initializeSeo(): void {
    // Set default SEO tags
    this.seoService.updateSeoTags({});

    // Generate structured data for person and portfolio
    this.seoService.generateStructuredData('person');
    this.seoService.generateStructuredData('portfolio');
  }
}
