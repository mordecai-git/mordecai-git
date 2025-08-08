import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  private readonly baseUrl = 'https://mordecai-git.github.io';
  private readonly defaultImage = `${this.baseUrl}/assets/images/mordecai-godwin-og.jpg`;

  updateSeoTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }): void {
    const {
      title = 'Mordecai Godwin - Fullstack Developer | Angular, .NET, Cloud Solutions',
      description = 'Experienced Fullstack Developer with 5+ years delivering secure, scalable enterprise applications. Specializing in Angular, .NET, Azure, and modern web technologies.',
      keywords = 'Fullstack Developer, Angular Developer, .NET Developer, Web Developer, Software Engineer, Azure, TypeScript, C#, JavaScript, Nigeria, Lagos, Remote Developer',
      image = this.defaultImage,
      url = this.baseUrl,
      type = 'website'
    } = config;

    // Update title
    this.title.setTitle(title);

    // Update meta tags
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });

    // Update Twitter tags
    this.meta.updateTag({ property: 'twitter:title', content: title });
    this.meta.updateTag({ property: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'twitter:image', content: image });
    this.meta.updateTag({ property: 'twitter:url', content: url });

    // Update canonical URL
    this.updateCanonicalUrl(url);
  }

  updatePageSeo(section: string): void {
    const seoConfigs = {
      home: {
        title: 'Mordecai Godwin - Fullstack Developer | Angular, .NET, Cloud Solutions',
        description:
          'Experienced Fullstack Developer with 5+ years delivering secure, scalable enterprise applications. Specializing in Angular, .NET, Azure, and modern web technologies.',
        url: this.baseUrl
      },
      about: {
        title: 'About Mordecai Godwin - Fullstack Developer | Tech Stack & Experience',
        description:
          "Learn about Mordecai Godwin's 5+ years of fullstack development experience, technical skills in Angular, .NET, Azure, and professional background.",
        url: `${this.baseUrl}#about`
      },
      experience: {
        title: 'Professional Experience - Mordecai Godwin | AXA Mansard, Harmoni Tech',
        description:
          "Explore Mordecai Godwin's professional journey as a Fullstack Developer at AXA Mansard Insurance, Harmoni Technologies, and Bytes Intel Limited.",
        url: `${this.baseUrl}#experience`
      },
      projects: {
        title: 'Projects Portfolio - Mordecai Godwin | Web Applications & Software Solutions',
        description:
          'View featured projects by Mordecai Godwin including Lead Management Systems, eCommerce platforms, and finance tracking applications.',
        url: `${this.baseUrl}#projects`
      },
      contact: {
        title: 'Contact Mordecai Godwin - Fullstack Developer | Hire for Your Next Project',
        description:
          'Get in touch with Mordecai Godwin for fullstack development opportunities. Available for remote work and based in Lagos, Nigeria.',
        url: `${this.baseUrl}#contact`
      }
    };

    const config = seoConfigs[section as keyof typeof seoConfigs];
    if (config) {
      this.updateSeoTags(config);
    }
  }

  private updateCanonicalUrl(url: string): void {
    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  generateStructuredData(type: 'person' | 'portfolio' | 'project', data?: any): void {
    const schemas = {
      person: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        'name': 'Mordecai Godwin',
        'alternateName': 'Mordecai Godwin David',
        'url': 'https://mordecai-git.github.io/',
        'image': 'https://mordecai-git.github.io/assets/images/mordecai-godwin.jpg',
        'jobTitle': 'Fullstack Developer',
        'worksFor': {
          '@type': 'Organization',
          'name': 'AXA Mansard Insurance Plc'
        },
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lagos',
          'addressCountry': 'Nigeria'
        },
        'email': 'davidire71@gmail.com',
        'telephone': '+2347084385093',
        'sameAs': ['https://github.com/mordecai-git', 'https://linkedin.com/in/godwin-mordecai-david'],
        'knowsAbout': [
          'Angular',
          '.NET Core',
          'C#',
          'TypeScript',
          'JavaScript',
          'Azure',
          'SQL Server',
          'Web Development',
          'Software Engineering',
          'Fullstack Development'
        ],
        'alumniOf': {
          '@type': 'EducationalOrganization',
          'name': 'The Polytechnic, Ibadan'
        }
      },
      portfolio: {
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        'name': 'Mordecai Godwin Portfolio',
        'url': 'https://mordecai-git.github.io/',
        'author': {
          '@type': 'Person',
          'name': 'Mordecai Godwin'
        },
        'description': 'Professional portfolio showcasing fullstack development projects and experience',
        'inLanguage': 'en-US'
      },
      project: {
        '@context': 'https://schema.org/',
        '@type': 'SoftwareApplication',
        'name': data?.name || 'Software Project',
        'description': data?.description || 'Professional software development project',
        'author': {
          '@type': 'Person',
          'name': 'Mordecai Godwin'
        },
        'programmingLanguage': data?.technologies || ['Angular', '.NET', 'TypeScript']
      }
    };

    this.addStructuredDataToHead(schemas[type]);
  }

  private addStructuredDataToHead(schema: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
