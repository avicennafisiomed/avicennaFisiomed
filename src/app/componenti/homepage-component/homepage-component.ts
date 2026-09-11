import { Component, OnInit } from '@angular/core';
import { ChiSiamoComponent } from '../chi-siamo-component/chi-siamo-component';
import {Sceglici} from '../sceglici/sceglici';
import {Tecnologie} from '../tecnologie/tecnologie';
import { RouterLink } from "@angular/router";
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-homepage-component',
imports: [ChiSiamoComponent,  CommonModule, Sceglici, Tecnologie, ],
  templateUrl: './homepage-component.html',
  styleUrl: './homepage-component.css',
})
export class HomepageComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Avicenna Fisiomed | Fisioterapia e Riabilitazione a Mestre',
      description:
        'Avicenna Fisiomed è un centro di fisioterapia, riabilitazione e performance a Mestre, Venezia. Fisioterapia, riabilitazione sportiva, prevenzione e trattamenti avanzati.',
      path: '/',
    });
    this.seo.setLocalBusinessSchema();
  }
}
