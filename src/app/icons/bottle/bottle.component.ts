import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.scss'],
})
export class BottleComponent {
  @Input() color: string | undefined;
}
