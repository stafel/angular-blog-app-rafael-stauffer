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
  woodchuckCalculationArray: string[] = [];

  onCalculate(): void {
    this.woodchuckCalculationArray = [];
    for (let i = 0; i < this.numberOfWoodchucks; i++) {
      this.woodchuckCalculationArray.push(`When woodckucks would chuck wood ${i+1} woodchuck could chuck ${i+1} wood`);
    }
  }

  getOutputStyle(iteration: number) {
    return {
      'font-size': `${35-iteration/3}px`,
    };
  }
}
