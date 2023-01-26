import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.scss'],
})
export class TabButtonComponent {
  @Input() active: boolean = false;
  @Input() text: string = '';
}
