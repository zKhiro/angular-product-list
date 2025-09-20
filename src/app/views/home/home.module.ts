





import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardProductModule, InputWrapperModule, ProductFormModule } from '@components';

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
    InputWrapperModule,
    ProductFormModule,
  ],
})
export class HomeModule { }
