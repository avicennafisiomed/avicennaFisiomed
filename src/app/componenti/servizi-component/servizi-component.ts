import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

import { menuServizi } from '../../modelli/interface';
import { menuServiziData } from '../../data/menuServizi.data';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-servizi-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './servizi-component.html',
  styleUrl: './servizi-component.css',
})
export class ServiziComponent implements OnInit {
  filteredServ: menuServizi[] = menuServiziData;

  leftColumn: menuServizi[] = [];
rightColumn: menuServizi[] = [];

constructor(private viewportScroller: ViewportScroller, private readonly seo: SeoService) {
  this.splitColumns();
}

ngOnInit(): void {
  this.seo.update({
    title: 'Servizi di Fisioterapia e Riabilitazione | Avicenna Fisiomed',
    description:
      'Scopri i servizi di fisioterapia, riabilitazione, terapie strumentali e performance di Avicenna Fisiomed a Mestre.',
    path: '/servizi',
  });
}


splitColumns() {
  const middle = Math.ceil(this.filteredServ.length / 2);

  this.leftColumn = this.filteredServ.slice(0, middle);
  this.rightColumn = this.filteredServ.slice(middle);
}

}
