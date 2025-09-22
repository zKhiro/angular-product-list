import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '@services';
import { CustomValidators } from '@utils';


@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  productForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    price: new FormControl('', { validators: [Validators.required, CustomValidators.floatMin(0)], nonNullable: true }),
    quantity: new FormControl('', { validators: [Validators.required, Validators.min(0)], nonNullable: true }),
  });

  productsService: ProductsService = inject(ProductsService);


  onSubmit(): void {
    this.productForm.markAllAsTouched();
    this.productForm.updateValueAndValidity();

    if (this.productForm.valid) {
      this.productsService.addProduct({
        name: this.productForm.controls.name.value,
        price: +this.productForm.controls.price.value,
        quantity: +this.productForm.controls.quantity.value,
      });

      this.productForm.reset();
    }
  }
}
