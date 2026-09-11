import { Component, AfterViewInit, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-contatti-component',
  templateUrl: './contatti-component.html',
  styleUrls: ['./contatti-component.css'], 
})
export class ContattiComponent implements AfterViewInit, OnInit {
  private map: any; 
  private centroid: [number, number] = [45.47393, 12.23573];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Contatti e Prenotazioni | Avicenna Fisiomed',
      description:
        'Contatta Avicenna Fisiomed a Marghera, Venezia, per informazioni e prenotazioni di fisioterapia, riabilitazione e performance.',
      path: '/contatti',
    });
  }

async ngAfterViewInit(): Promise<void> {
  if (isPlatformBrowser(this.platformId)) {

    const leaflet = await import('leaflet');
    const L = leaflet.default ?? leaflet;

    // Fix marker icons
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
    });

    this.map = L.map('map', {
      center: this.centroid,
      zoom: 16
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker(this.centroid).addTo(this.map);
  }
}
}
