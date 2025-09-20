import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';

import { InputWrapperComponent } from './input-wrapper.component';


describe('InputWrapperComponent', () => {
  let component: InputWrapperComponent;
  let fixture: ComponentFixture<InputWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWrapperComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('', { validators: [Validators.required] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render error message when input is empty', () => {
    component.control.markAllAsTouched();
    fixture.detectChanges();

    const errorMsgEl = fixture.nativeElement.querySelector('[data-testid=error-msg]');

    expect(errorMsgEl).toBeTruthy();
  });
});
