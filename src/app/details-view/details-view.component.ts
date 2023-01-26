import { Component, Input } from '@angular/core';
import { FlatProduct } from 'src/services/api.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
})
export class DetailsViewComponent {
  @Input() products: FlatProduct[] = [];
}
