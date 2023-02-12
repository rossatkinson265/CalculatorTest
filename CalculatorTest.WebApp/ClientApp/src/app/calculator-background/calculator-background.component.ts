import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimpleCalculatorComponent } from '../simple-calculator/simple-calculator.component';

@Component({
  selector: 'app-calculator-background',
  templateUrl: './calculator-background.component.html',
  styleUrls: ['./calculator-background.component.css']
})
export class CalculatorBackgroundComponent {
  constructor(private simpleCalculator: NgbModal) {
    this.LaunchCalculator();
  }
  LaunchCalculator(): void {
    this.simpleCalculator.open(SimpleCalculatorComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
      modalDialogClass: 'calculatorModal'
    });
  }
}
