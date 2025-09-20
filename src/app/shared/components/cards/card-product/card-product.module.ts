import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardProductComponent } from './card-product.component';


@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardProductComponent,
  ]
})
export class CardProductModule { }
