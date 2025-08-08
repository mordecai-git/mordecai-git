import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  currentLanguage = 'en';
  private translate = inject(TranslateService);
  private languageService = inject(LanguageService);

  ngOnInit() {
    // Get the current language and set it in the component
    this.currentLanguage = this.languageService.getCurrentLanguage();

    // Listen for language changes to keep the dropdown in sync
    this.translate.onLangChange.subscribe(event => {
      this.currentLanguage = event.lang;
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.languageService.changeLanguage(target.value);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
