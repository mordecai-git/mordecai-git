import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    // Update SEO for hero/home section
    this.seoService.updatePageSeo('home');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update SEO based on the section being viewed
      this.seoService.updatePageSeo(sectionId);
    }
  }
}
