import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-lateral-dialog',
  standalone: false,
  templateUrl: './lateral-dialog.component.html',
  styleUrl: './lateral-dialog.component.scss'
})
export class LateralDialogComponent {
  @Input() dialogTitle: string;

  @Input() set showDialog(newValue: boolean) {
    this._showDialog = newValue;

    const body = document.querySelector('body');

    if (newValue) {
      this.renderer.addClass(body, 'occult-scroll');
    } else {
      this.renderer.removeClass(body, 'occult-scroll');
    }

    // Espera animação finalizar.
    setTimeout(() => {
      this.showDialogChange.emit(newValue);
    }, 200);
  };
  @Output() showDialogChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _showDialog: boolean;
  get showDialog() {
    return this._showDialog;
  }

  constructor(private readonly renderer: Renderer2) {}

}
