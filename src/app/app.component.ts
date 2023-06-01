import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'woodchuck calculator';

  formatLabel(value: number): string {
    // for the slider label
    return `${value}`;
  }

  numberOfWoodchucks = 1;
  woodchuckCalculationArray: string[] = [];

  onCalculate(): void {
    // generates the text lines to output
    this.woodchuckCalculationArray = [];
    for (let i = 0; i < this.numberOfWoodchucks; i++) {
      this.woodchuckCalculationArray.push(`When woodckucks would chuck wood ${i+1} woodchuck could chuck ${i+1} wood`);
    }
  }

  getOutputStyle(iteration: number) {
    // output gets smaller and smaller because nobody wants to read all those lines anyway
    return {
      'font-size': `${35-iteration/3}px`,
    };
  }

  getStylingClass() {
    if (this.numberOfWoodchucks > 50) {
      return "extremeChucking";
    }
    return "";
  }

  getFooterText() {
    if (this.numberOfWoodchucks > 99){
      return "Woodchucks would chuck our webserver but they can't";
    }

    if (this.numberOfWoodchucks > 20) {
      return "Some woodchucks were harmed while making this website";
    }

    return "No woodchucks were harmed while making this website";
  }
}
