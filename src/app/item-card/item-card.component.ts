import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  animations: [
    trigger('renderTrigger', [
      transition(':enter', [
        style({ scale: 1 }),
        animate('200ms', style({ scale: 1.05 })),
        animate('100ms', style({ scale: 1 })),
      ]),
    ]),
  ],
})
export class ItemCardComponent {
  @Input() imgUrl = '';
  @Input() name?: string;
  @Input() price?: number;
  @Input() quantity?: string;
  @Input() small: boolean = false;
}
