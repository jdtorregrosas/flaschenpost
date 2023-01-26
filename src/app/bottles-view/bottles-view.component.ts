import { Component, Input } from '@angular/core';
import { FlatProduct } from 'src/services/api.service';

@Component({
  selector: 'app-bottles-view',
  templateUrl: './bottles-view.component.html',
  styleUrls: ['./bottles-view.component.scss'],
})
export class BottlesViewComponent {
  @Input() products: FlatProduct[] = [];
}
