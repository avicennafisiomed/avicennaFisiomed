import { Component } from '@angular/core';
import { ChiSiamoComponent } from '../chi-siamo-component/chi-siamo-component';
import {Sceglici} from '../sceglici/sceglici';
import {Tecnologie} from '../tecnologie/tecnologie';
import { RouterLink } from "@angular/router";
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage-component',
imports: [ChiSiamoComponent,  CommonModule, Sceglici, Tecnologie, ],
  templateUrl: './homepage-component.html',
  styleUrl: './homepage-component.css',
})
export class HomepageComponent {

}
