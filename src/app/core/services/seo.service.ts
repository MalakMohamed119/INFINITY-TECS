import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private readonly defaultTitle = 'Infinity Tecs | Smart Vending & Mobile Solutions';

  private readonly defaultDesc = 'Infinity Tecs is Cairo leading supplier and operator of bean-to-cup coffee machines, snack vendors, and touchless mobile app vending solutions in Egypt.';

  setSeoData(config: Partial<SeoConfig>): void {
    const title = config.title ? (config.title.includes('Infinity Tecs') ? config.title : `${config.title} | Infinity Tecs`) : this.defaultTitle;

    const description = config.description || this.defaultDesc;
    const keywords = config.keywords || 'Infinity Tecs, Coffee Vending Machines Cairo, VendPlace, Touchless Vending App Egypt, Smart Vending, Espresso Solutions';
    const ogImage = config.ogImage || 'image.png';

    this.titleService.setTitle('Infinity Tecs');
    
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    // OpenGraph Tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: ogImage });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }
}
