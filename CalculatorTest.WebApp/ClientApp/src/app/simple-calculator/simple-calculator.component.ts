import { AfterContentInit, AfterViewInit, Component, HostListener } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Operator } from 'rxjs';
import { IPostCalculatorOperation, numbers, operators, OperatorType } from '../data/calculator-data';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { CalculatorService } from '../services/calculator-service.service';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent {
  public simpleNumbers: number[] = numbers;
  public simpleOperators: string[] = Array.from(operators.keys());
  public runningTotal: number = NaN;
  public firstOperator: string = '';
  public secondOperator: string = '';
  public firstNumString: string = '';
  public secondNumString: string = '';
  public showRunningTotal: boolean = false;
  private _equalsOverwriteNext: boolean = false;
  private _ctrlActive: boolean = false;
  constructor(private _calcService: CalculatorService, private _errorDialog: NgbModal, private _settingsDialog: NgbModal, private _activeModal: NgbActiveModal) { }
  CloseSelf(): void {
    this._activeModal.close();
  }
  @HostListener('window:keyup', ['$event'])
  KeyUp(event: KeyboardEvent): void {
    if (event.key != 'Control')
      return;
    this._ctrlActive = false;
  }

  @HostListener('window:keydown', ['$event'])
  KeyEvent(event: KeyboardEvent): void {
    if (this._ctrlActive)
      return;

    switch (event.key) {
      case 'Control':
        this._ctrlActive = true;
        return;
      //Spacebar clicked
      case ' ':
        return;
      case 'Backspace':
        this.Backspace();
        return;
      case 'Enter':
        this.ImplementOperator('=');
        return;
    }

    if (!Number.isNaN(Number(event.key))) {
      this.AppendNumber(Number(event.key));
      return;
    }
    if (!operators.has(event.key))
      return;
    this.ImplementOperator(event.key);
  }

  ClearAll(): void {
    this._equalsOverwriteNext = false;
    this.firstNumString = '';
    this.secondNumString = '';
    this.firstOperator = '';
    this.secondOperator = '';
    this.runningTotal = 0;
  }

  AppendNumber(num: number): void {
    if (this._equalsOverwriteNext) {
      this._equalsOverwriteNext = false;
      this.showRunningTotal = false;
      this.ClearAll();
      this.firstNumString += num;
      return;
    }

    //Signed int scope: -2147483647 => 2147483647
    let maxDigits = 10;
    if (this.firstOperator.length < 1) {
      //Allowed to enter a negative for first integer so allow one extra to the max count for the '-' character.
      if (this.firstNumString.indexOf('-') >= 0)
        maxDigits = 11;
      if (this.firstNumString.length == maxDigits) {
        this.LaunchErrorDialog('Please enter a maximum length of 10 digits for each number');
        return;
      }
      this.firstNumString += num;
      return;
    }
    if (this.secondNumString.length == maxDigits) {
      this.LaunchErrorDialog('Please enter a maximum length of 10 digits for each number');
      return;
    }
    this.secondNumString += num;
  }

  Backspace(): void {
    if (this._equalsOverwriteNext) {
      //This means they have just hit equals and then immediately backspaced the result
      this.runningTotal = 0;
      this.showRunningTotal = false;
      this._equalsOverwriteNext = false;
      return;
    }
    if (this.secondNumString.length > 0) {
      this.secondNumString = this.secondNumString.substring(0, this.secondNumString.length - 1);
      return;
    }
    if (this.firstOperator.length > 0) {
      this.firstOperator = '';
      return;
    }

    if (this.firstNumString.length < 1)
      return;

    this.firstNumString = this.firstNumString.substring(0, this.firstNumString.length - 1);
  }

  ImplementOperator(operator: string): void {
    this._equalsOverwriteNext = false;
    if (this.firstNumString.length < 1) {
      //No number entered so the only possible application of an operator here could be to make the first number negative
      if (operators.get(operator) != OperatorType.subtract) {
        return;
      }
      this.firstNumString += operator;
      return;
    }

    //If we have already made the number negative, return
    if (this.firstNumString == '-')
      return;

    if (this.firstOperator.length < 1) {
      if (operators.get(operator) == OperatorType.equals)
        return;
      this.firstOperator = operator;
      return;
    }
    //No second number entered means we must have two operators back to back
    //If trying to enter a negative second number we switch the operator in this case as adding a negative number if the equalivent of subtracting
    //Subtracting a negative number is the same as adding
    //e.g., 4 + -2 == 4 - 2
    if (this.secondNumString.length < 1) {
      if (operators.get(operator) == OperatorType.equals)
        return;
      if (operators.get(operator) == OperatorType.subtract) {
        //Entered subtract
        if (operators.get(this.firstOperator) == OperatorType.add) {
          //Existing is an add
          //This is the same as a subtract, so switch the operator to the entered subtract
          this.firstOperator = operator;
          return;
        }
        if (operators.get(this.firstOperator) == OperatorType.subtract) {
          //Existing is a subtract, and we are entering another subtract
          //This is the same as an add, so switch the operator to add
          this.firstOperator = '+';
          return;
        }
        return;
      }
      return;
    }
    this.secondOperator = operator;
    if (Number.isNaN(this.firstNumString)) {
      this.LaunchErrorDialog('Cannot process first number, please amend and try again.');
      return;
    }
    if (Number.isNaN(this.secondNumString)) {
      this.LaunchErrorDialog('Cannot process second number, please amend and try again.');
      return;
    }
    let postFirstNumber: number = Number(this.firstNumString);
    let postSecondNumber: number = Number(this.secondNumString);
    if (postFirstNumber > 2147483647 || postFirstNumber < -2147483647 || postSecondNumber > 2147483647 || postSecondNumber < -2147483647) {
      this.LaunchErrorDialog('Max value exceeded. Please enter a number between -2147483647 and 2147483647.');
      return;
    }
    let postData: IPostCalculatorOperation = {
      start: postFirstNumber,
      amount: postSecondNumber
    };
    //Do post
    switch (operators.get(this.firstOperator)) {
      case OperatorType.add:
        this._calcService.PostAddOperation(postData).subscribe(result => {
          if (result.success) {
            this.runningTotal = result.newVal;
            this.UpdateCalculator();
            return;
          }
          this.LaunchErrorDialog(result.feedback);
        });
        break;
      case OperatorType.subtract:
        this._calcService.PostSubtractOperation(postData).subscribe(result => {
          if (result.success) {
            this.runningTotal = result.newVal;
            this.UpdateCalculator();
            return;
          }
          this.LaunchErrorDialog(result.feedback);
        });
        break;
    }
  }

  UpdateCalculator(): void {
    this.showRunningTotal = true;
    this.firstNumString = this.runningTotal.toString();
    this.secondNumString = '';
    if (operators.get(this.secondOperator) == OperatorType.equals) {
      this._equalsOverwriteNext = true;
      this.firstOperator = '';
      this.secondOperator = '';
      return;
    }
    this.firstOperator = this.secondOperator;
    this.secondOperator = '';
  }

  LaunchErrorDialog(errorMessage: string): void {
    const errorDialogRef: NgbModalRef = this._errorDialog.open(ErrorDialogComponent, { centered: true, modalDialogClass: 'errorModal' });
    errorDialogRef.componentInstance.error = errorMessage;
  }

  OpenSettings(): void {
    this._settingsDialog.open(SettingsDialogComponent, { centered: true, modalDialogClass: 'settingsModal' });
  }
}
