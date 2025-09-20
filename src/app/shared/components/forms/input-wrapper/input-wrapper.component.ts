import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input-wrapper',
  standalone: false,
  templateUrl: './input-wrapper.component.html',
  styleUrl: './input-wrapper.component.scss'
})
export class InputWrapperComponent {
  @Input() control: FormControl;
  @Input() label: string;

  readonly errorMsgs: { [key: string]: string } = {
    required: 'Campo obrigatório.',
    min: 'O valor não pode ser negativo.',
  }


  get getErrorMsg(): string | null {
    return this.control.errors ? this.errorMsgs[Object.keys(this.control.errors)[0]] : null
  }
}
