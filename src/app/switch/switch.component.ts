import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  isOn: boolean = false;

  toggle() {
    this.isOn = !this.isOn;
  }
}
