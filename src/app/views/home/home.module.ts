





import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CardProductModule, EmptyStateModule, InputWrapperModule, LateralDialogModule, ProductFormModule,
} from '@components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,

    CardProductModule,
    EmptyStateModule,
    InputWrapperModule,
    LateralDialogModule,
    ProductFormModule,
  ],
})
export class HomeModule { }
