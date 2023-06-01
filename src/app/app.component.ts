import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'woodchuck calculator';

  formatLabel(value: number): string {
    return `${value}`;
  }

  numberOfWoodchucks = 1;
}
