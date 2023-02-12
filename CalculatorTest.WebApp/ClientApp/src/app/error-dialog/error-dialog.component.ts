import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {
  constructor(private _activeModal: NgbActiveModal) { }
  public error: string = '';
  CloseSelf(): void {
    this._activeModal.close();
  }
}
