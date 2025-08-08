import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService);
  private readonly LANGUAGE_KEY = 'preferred-language';
  private readonly DEFAULT_LANGUAGE = 'en';
  private readonly SUPPORTED_LANGUAGES = ['en', 'es', 'de', 'pcm', 'yo', 'ig', 'ha'];

  initializeLanguage(): void {
    const savedLanguage = this.getSavedLanguage();
    const languageToUse = this.isLanguageSupported(savedLanguage) ? savedLanguage : this.DEFAULT_LANGUAGE;

    this.translate.setDefaultLang(this.DEFAULT_LANGUAGE);
    this.translate.use(languageToUse!);
  }

  changeLanguage(language: string): void {
    if (this.isLanguageSupported(language)) {
      this.translate.use(language);
      this.saveLanguage(language);
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.getSavedLanguage() || this.DEFAULT_LANGUAGE;
  }

  private saveLanguage(language: string): void {
    try {
      localStorage.setItem(this.LANGUAGE_KEY, language);
    } catch (error) {
      console.warn('Could not save language to localStorage:', error);
    }
  }

  private getSavedLanguage(): string | null {
    try {
      return localStorage.getItem(this.LANGUAGE_KEY);
    } catch (error) {
      console.warn('Could not retrieve language from localStorage:', error);
      return null;
    }
  }

  private isLanguageSupported(language: string | null): boolean {
    return language !== null && this.SUPPORTED_LANGUAGES.includes(language);
  }
}
