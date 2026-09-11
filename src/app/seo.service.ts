import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const SITE_URL = 'https://avicennafisiomed.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/img/logo.png`;

export interface SeoPage {
  title: string;
  description: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  update(page: SeoPage): void {
    const url = `${SITE_URL}${page.path}`;
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: DEFAULT_IMAGE });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.setCanonical(url);
  }

  setLocalBusinessSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Avicenna Fisiomed',
      url: SITE_URL,
      image: DEFAULT_IMAGE,
      description:
        'Centro di fisioterapia, riabilitazione e performance a Marghera, Venezia.',
      telephone: '+390418231920',
      email: 'Avicennafisiomed.srl@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Banchina Molini 8, 4° piano',
        addressLocality: 'Marghera',
        addressRegion: 'VE',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.47393,
        longitude: 12.23573,
      },
      sameAs: [
        'https://www.facebook.com/AvicennaFisiomed',
        'https://www.instagram.com/avicennafisiomed/',
      ],
    };
    const scriptId = 'local-business-schema';
    let script = this.document.head.querySelector<HTMLScriptElement>(`#${scriptId}`);

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.text = JSON.stringify(schema);
  }

  private setCanonical(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
}
