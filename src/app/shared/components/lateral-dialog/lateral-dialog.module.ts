import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LateralDialogComponent } from './lateral-dialog.component';


@NgModule({
  declarations: [
    LateralDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LateralDialogComponent,
  ],
})
export class LateralDialogModule { }
