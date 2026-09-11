import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DettagliServizio } from '../../modelli/interface';
import { DettagliServizioData } from '../../data/dettagliservizio.data';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../seo.service';


@Component({
  selector: 'app-dettagli-servizi',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dettagli-servizi.html',
  styleUrl: './dettagli-servizi.css',
})
export class DettagliServizi implements OnInit {
page? : DettagliServizio;

  constructor(private route: ActivatedRoute, private readonly seo: SeoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.page= DettagliServizioData.find(
        servizio => servizio.id === id
      )

      if (this.page && id) {
        this.seo.update({
          title: `${this.page.title} | Avicenna Fisiomed`,
          description: this.page.description,
          path: `/servizi/${id}`,
        });
      }
    })
  }
}
