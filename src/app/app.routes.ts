import { Routes } from '@angular/router';
import { HomepageComponent } from './componenti/homepage-component/homepage-component';
import { ContattiComponent } from './componenti/contatti-component/contatti-component';
import { ServiziComponent } from './componenti/servizi-component/servizi-component';
import { DettagliServizi } from './componenti/dettagli-servizi/dettagli-servizi';

export const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Avicenna Fisiomed | Fisioterapia e Riabilitazione a Mestre' },
  { path: 'contatti', component: ContattiComponent, title: 'Contatti e Prenotazioni | Avicenna Fisiomed' },
  { path: 'servizi', component: ServiziComponent,  title: 'Servizi di Fisioterapia e Riabilitazione | Avicenna Fisiomed' },
  { path: 'servizi/:id', component: DettagliServizi }
];
