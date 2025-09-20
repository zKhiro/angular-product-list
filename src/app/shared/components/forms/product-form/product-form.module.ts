import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputWrapperModule } from '@components';

import { ProductFormComponent } from './product-form.component';


@NgModule({
  declarations: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NgxMaskDirective,

    InputWrapperModule,
  ],
  exports: [
    ProductFormComponent,
  ],
  providers: [
    provideNgxMask({ thousandSeparator: '.', decimalMarker: ',', leadZero: true }),
  ]
})
export class ProductFormModule { }
