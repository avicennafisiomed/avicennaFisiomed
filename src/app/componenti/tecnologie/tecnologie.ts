import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { CosaFacciamoData} from '../../modelli/interface';
import { DataFacciamo } from '../../data/cosafacciamo.data';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tecnologie',
  imports: [CommonModule, RouterModule],
  templateUrl: './tecnologie.html',
  styleUrl: './tecnologie.css',
})
export class Tecnologie {
  data: CosaFacciamoData[] = DataFacciamo;
}
